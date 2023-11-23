import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';
import { SendCodeEmailDto } from './dto/send-code-email.dto';
import { ConfirmCodeEmailDto } from './dto/confirm-code-email.dto';

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

	@ApiOperation({ summary: 'Sending email confirmation code [Authorized]' })
	@ApiResponse({ status: 200, description: 'Successfully sending the code' })
	@ApiResponse({ status: 403, description: 'If email already exists or user is unauthorized' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@ApiResponse({ status: 500, description: 'If the code was not sent' })
	@UseGuards(JwtAuthGuard)
	@Post('/email')
	sendCodeEmail(@Req() request: Request, @Body() dto: SendCodeEmailDto) {
		return this.authService.sendCodeEmail(request['user'].id, dto);
	}

	@ApiOperation({ summary: 'Confirmation user email [Authorized]' })
	@ApiResponse({ status: 200, description: 'Successfully confirmation' })
	@ApiResponse({
		status: 403,
		description: "If user is unauthorized or wrong code or user doesn't have the confirmation code",
	})
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@UseGuards(JwtAuthGuard)
	@Post('/email_confirmation')
	confirmCodeEmail(@Req() request: Request, @Body() dto: ConfirmCodeEmailDto) {
		return this.authService.confirmCodeEmail(request['user'].id, dto);
	}
}
