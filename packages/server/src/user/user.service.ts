import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { generate as generatePassword } from 'generate-password';
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
			return 'The recovery password was sent.';
		} else throw new InternalServerErrorException('Unexpected error... Try again later.');
	}

	async getInfo(id: number) {
		const user = await this.usersService.getOneById(id);
		if (!user) throw new NotFoundException('User not found.');
		return user;
	}
}
