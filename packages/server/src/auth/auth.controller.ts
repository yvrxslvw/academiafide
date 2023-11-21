import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly service: AuthService) {}

	@Post('/login')
	login(@Body() loginDto: LoginUserDto) {
		return this.service.login(loginDto);
	}

	@Post('/logup')
	logup(@Body() logupDto: CreateUserDto) {
		return this.service.logup(logupDto);
	}
}
