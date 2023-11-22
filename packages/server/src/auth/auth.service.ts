import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

	async login(dto: LoginUserDto) {
		const user = await this.usersService.getOneByLogin(dto.login);
		if (!user) throw new ForbiddenException('Incorrect login or password.');
		const isPasswordCorrect = await bcrypt.compare(dto.password, user.password);
		if (!isPasswordCorrect) throw new ForbiddenException('Incorrect login or password.');
		return this.generateToken(user);
	}

	async logup(dto: CreateUserDto) {
		const hashPassword = await bcrypt.hash(dto.password, 5);
		const user = await this.usersService.create({ ...dto, password: hashPassword });
		return this.generateToken(user);
	}

	private async generateToken(user: User) {
		const payload = { id: user.id, login: user.login, email: user.email, roles: user.roles };
		return {
			token: this.jwtService.sign(payload),
		};
	}
}
