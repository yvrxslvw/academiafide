import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

	async login(loginDto: LoginUserDto) {
		const user = await this.userService.getOneByLogin(loginDto.login);
		if (!user) throw new ForbiddenException('Incorrect login or password.');
		const isPasswordCorrect = await bcrypt.compare(loginDto.password, user.password);
		if (!isPasswordCorrect) throw new ForbiddenException('Incorrect login or password.');
		return this.generateToken(user);
	}

	async logup(logupDto: CreateUserDto) {
		const hashPassword = await bcrypt.hash(logupDto.password, 5);
		const user = await this.userService.create({ ...logupDto, password: hashPassword });
		return this.generateToken(user);
	}

	private async generateToken(user: User) {
		const payload = { id: user.id, login: user.login, email: user.email, roles: user.roles };
		return {
			token: this.jwtService.sign(payload),
		};
	}
}
