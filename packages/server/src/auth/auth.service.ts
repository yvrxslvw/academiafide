import { Injectable } from '@nestjs/common';
import { ForbiddenException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import { SendCodeEmailDto } from './dto/send-code-email.dto';
import { ConfirmCodeEmailDto } from './dto/confirm-code-email.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
		private readonly mailerService: MailerService,
	) {}

	async login(dto: LoginUserDto, response: Response) {
		const user = await this.usersService.getOneByLogin(dto.login);
		if (!user) throw new ForbiddenException('Incorrect login or password.');
		const isPasswordCorrect = await bcrypt.compare(dto.password, user.password);
		if (!isPasswordCorrect) {
			if (user.recovery_password) {
				const isRecoveryPasswordCorrect = await bcrypt.compare(dto.password, user.recovery_password);
				if (!isRecoveryPasswordCorrect) throw new ForbiddenException('Incorrect login or password.');
			} else throw new ForbiddenException('Incorrect login or password.');
		}
		return this.generateToken(user, response);
	}

	async logup(dto: CreateUserDto, response: Response) {
		const hashPassword = await bcrypt.hash(dto.password, 5);
		const user = await this.usersService.create({ ...dto, password: hashPassword });
		return this.generateToken(user, response);
	}

	async sendCodeEmail(id: number, dto: SendCodeEmailDto) {
		const user = await this.usersService.getOneById(id);
		const emailExists = await this.usersService.getOneByEmail(dto.email, false);
		if (emailExists) throw new ForbiddenException('Email already exists.');
		const code = Math.round(Math.random() * (100000 - 999999) + 999999);
		const isSent = await this.mailerService.sendMessage(
			dto.email,
			'Confirmación de dirección postal en Academia Fide',
			`<h3>Para confirmar su dirección postal, utilice este código: ${code}.</h3>`,
		);
		if (isSent) {
			await user.update({ email: dto.email, email_code: code });
			return 'The code was sent.';
		} else throw new InternalServerErrorException('Unexpected error... Try again later.');
	}

	async confirmCodeEmail(id: number, dto: ConfirmCodeEmailDto) {
		const user = await this.usersService.getOneById(id);
		if (!user.email_code) throw new ForbiddenException();
		if (dto.code !== user.email_code) throw new ForbiddenException('Wrong code.');
		await user.update({ email_confirmed: true, email_code: null });
		return 'Confirmed.';
	}

	async refresh(request: Request, response: Response) {
		const token = request.cookies['refreshToken'];
		if (!token) throw new UnauthorizedException('Not authorized.');
		const { id } = await this.jwtService.verifyAsync<{ id: number }>(token);
		const user = await this.usersService.getOneById(id);
		return this.generateToken(user, response);
	}

	private async generateToken(user: User, response: Response) {
		const accessPayload = { id: user.id, roles: user.roles };
		const refreshPayload = { id: user.id };

		response.cookie('refreshToken', this.jwtService.sign(refreshPayload, { expiresIn: '30d' }), {
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
			path: '/api/auth/refresh',
			secure: true,
		});

		return response.json({
			token: this.jwtService.sign(accessPayload, { expiresIn: '10s' }),
		});
	}
}
