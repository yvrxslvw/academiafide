import { Injectable } from '@nestjs/common';
import { ForbiddenException, InternalServerErrorException, NotFoundException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { generate as generatePassword } from 'generate-password';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { SendCodeEmailDto } from './dto/send-code-email.dto';
import { ConfirmCodeEmailDto } from './dto/confirm-code-email.dto';
import { MailerService } from 'src/mailer/mailer.service';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
		private readonly mailerService: MailerService,
	) {}

	async login(dto: LoginUserDto, response: Response): Promise<Response> {
		const user = await this.usersService.getOneByLogin(dto.login);
		if (!user) throw new ForbiddenException('Wrong login or password.');
		if (!(await bcrypt.compare(dto.password, user.password))) {
			if (user.recovery_password) {
				if (!(await bcrypt.compare(dto.password, user.recovery_password))) {
					throw new ForbiddenException('Wrong login or password.');
				}
			} else {
				throw new ForbiddenException('Wrong login or password.');
			}
		}
		return response.json({ token: await this.generateToken(user, response), user });
	}

	async logup(dto: CreateUserDto, response: Response): Promise<Response> {
		const hashPassword = await bcrypt.hash(dto.password, 5);
		const user = await this.usersService.create({ ...dto, password: hashPassword });
		return response.json({ token: await this.generateToken(user, response), user });
	}

	async logout(response: Response): Promise<Response> {
		response.clearCookie('refreshToken', { path: '/api/auth/refresh', secure: true, sameSite: 'none' });
		return response.json({ message: 'Successfully.' });
	}

	async recoveryPassword(dto: RecoveryPasswordDto): Promise<{ message: string }> {
		const user = await this.usersService.getOneByEmail(dto.email, true);
		if (!user) throw new NotFoundException('User email not found.');
		const newPassword = generatePassword({ length: 10, numbers: true });
		const hashPassword = await bcrypt.hash(newPassword, 5);
		const html = `
			<h3>Se envió una solicitud para restaurar el acceso a su cuenta, si no era usted, simplemente ignore este mensaje.</h3>
			<h3>Utilice la nueva contraseña para iniciar sesión en su cuenta: <h2>${newPassword}</h2>.</h3>
		`;
		const isSent = await this.mailerService.sendMessage(dto.email, 'Restablecer el acceso', html);
		if (isSent) {
			await user.update({ recovery_password: hashPassword });
			return { message: 'The recovery password was sent.' };
		} else throw new InternalServerErrorException('Unexpected error... Try again later.');
	}

	async sendCodeEmail(request: Request, dto: SendCodeEmailDto): Promise<{ message: string }> {
		const id: number = request['user'].id;
		const user = await this.usersService.getOneById(id);
		if (user.email_code && !dto.resend) return { message: 'Code was sent.' };
		const code = Math.round(Math.random() * (100000 - 999999) + 999999);
		const isSent = await this.mailerService.sendMessage(
			dto.email,
			'Confirmación de dirección postal en Academia Fide',
			`<h3>Para confirmar su dirección postal, utilice este código: ${code}.</h3>`,
		);
		if (isSent) {
			await user.update({ email: dto.email, email_code: code });
			return { message: 'Code was sent.' };
		} else throw new InternalServerErrorException('Unexpected error... Try again later.');
	}

	async confirmCodeEmail(request: Request, dto: ConfirmCodeEmailDto): Promise<{ message: string }> {
		const id: number = request['user'].id;
		const user = await this.usersService.getOneById(id);
		if (!user.email_code) throw new ForbiddenException();
		if (dto.code !== user.email_code) throw new ForbiddenException('Wrong code.');
		await user.update({ email_confirmed: true, email_code: null });
		return { message: 'Confirmed.' };
	}

	async update(request: Request, dto: UpdateUserDto, image?: any): Promise<{ message: string }> {
		const id: number = request['user'].id;
		await this.usersService.update(id, dto, image);
		return { message: 'Successful updating.' };
	}

	async refresh(request: Request, response: Response): Promise<Response> {
		const token = request.cookies['refreshToken'];
		if (!token) throw new ForbiddenException('Not authorized.');
		const { id } = await this.jwtService.verifyAsync<{ id: number }>(token);
		const user = await this.usersService.getOneById(id);
		return response.json({ token: await this.generateToken(user, response), user });
	}

	private async generateToken(user: User, response: Response): Promise<string> {
		const accessPayload = { id: user.id, roles: user.roles };
		const refreshPayload = { id: user.id };
		const refreshToken = await this.jwtService.signAsync(refreshPayload, { expiresIn: '30d' });

		response.cookie('refreshToken', refreshToken, {
			maxAge: 1000 * 60 * 60 * 24 * 30,
			path: '/api/auth/refresh',
			// secure: true,
			// sameSite: 'none',
			sameSite: 'strict',
			// !!!
		});

		return this.jwtService.sign(accessPayload, { expiresIn: '10m' });
	}
}
