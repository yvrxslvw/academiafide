import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { MailerService } from 'src/mailer/mailer.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UsersService } from 'src/users/users.service';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';

@Injectable()
export class UserService {
	constructor(private readonly usersService: UsersService, private readonly mailerService: MailerService) {}

	async update(id: number, dto: UpdateUserDto, image?: any) {
		const hashPassword = dto.password ? await bcrypt.hash(dto.password, 5) : undefined;
		dto.password = hashPassword;
		return this.usersService.update(id, dto, image);
	}

	async recovery(dto: RecoveryPasswordDto) {
		const user = await this.usersService.getOneByEmail(dto.email);
		if (!user) throw new NotFoundException('User email not found.');
		const recoveryId = uuidv4();
		const recoveryLink = `${process.env.API_URL}/api/user/recovery/${recoveryId}`;
		const html = `
			<h3>Se envió una solicitud para restaurar el acceso a su cuenta, si no era usted, simplemente ignore este mensaje.</h3>
			<h3>Para restaurar el acceso, simplemente siga el enlace: <a href="${recoveryLink}">Restaurar acceso</a></h3>
		`;
		const isSent = this.mailerService.sendMessage(dto.email, 'Restablecer el acceso', html);
		if (isSent) {
			await user.update({ recovery_link: recoveryId });
			return 'The recovery link was sent.';
		} else throw new InternalServerErrorException('Unexpected error... Try again later.');
	}

	async recoveryConfirm(recoveryId: string, response: Response) {
		const user = await this.usersService.getOneByRecoveryId(recoveryId);
		if (!user) {
			return response.send('redirect to the error page');
		}
		const generatedPassword = 'AcademiaFidePassword'; // todo: generating password
		const hashPassword = await bcrypt.hash(generatedPassword, 5);
		await user.update({ password: hashPassword, recovery_link: null });
		return response.send(`redirect to the successful page ${generatedPassword}`);
	}
}
