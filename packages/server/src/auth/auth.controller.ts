import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiOperation({ summary: 'Authorize user' })
	@ApiResponse({ status: 201, description: 'Successful authorization and get the token' })
	@ApiResponse({ status: 403, description: 'Incorrect login or password' })
	@Post('/login')
	login(@Body() dto: LoginUserDto) {
		return this.authService.login(dto);
	}

	@ApiOperation({ summary: 'Register user' })
	@ApiResponse({ status: 201, description: 'Successful registration and get the token' })
	@ApiResponse({ status: 403, description: 'If login or email already exists' })
	@Post('/logup')
	logup(@Body() dto: CreateUserDto) {
		return this.authService.logup(dto);
	}
}
