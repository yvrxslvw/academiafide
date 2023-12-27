import { Controller, Post, Body, UseGuards, Req, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiBearerAuth, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SendCodeEmailDto } from './dto/send-code-email.dto';
import { ConfirmCodeEmailDto } from './dto/confirm-code-email.dto';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@ApiTags('Authorization interactions')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiOperation({ summary: 'User authorization' })
	@ApiResponse({ status: 201, description: 'Successful user authorization' })
	@ApiResponse({ status: 403, description: 'Wrong login or password' })
	@Post('/login')
	login(@Body() dto: LoginUserDto, @Res() response: Response): Promise<Response> {
		return this.authService.login(dto, response);
	}

	@ApiOperation({ summary: 'User registration' })
	@ApiResponse({ status: 201, description: 'Successful user registration' })
	@ApiResponse({ status: 403, description: 'Login already exist' })
	@Post('/logup')
	logup(@Body() dto: CreateUserDto, @Res() response: Response): Promise<Response> {
		return this.authService.logup(dto, response);
	}

	@ApiOperation({ summary: 'Logout user' })
	@ApiResponse({ status: 201, description: 'Successful user logout' })
	@Post('/logout')
	logout(@Res() response: Response): Promise<Response> {
		return this.authService.logout(response);
	}

	@ApiOperation({ summary: 'Sending a recovery password message' })
	@ApiResponse({ status: 201, description: 'Successful sending' })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@ApiResponse({ status: 500, description: 'Message was not sent' })
	@Post('/recovery')
	recovery(@Body() dto: RecoveryPasswordDto): Promise<{ message: string }> {
		return this.authService.recoveryPassword(dto);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Sending an email confirmation code' })
	@ApiResponse({ status: 201, description: 'Successfully sending a code' })
	@ApiResponse({ status: 401, description: 'User is unauthorized' })
	@ApiResponse({ status: 403, description: 'Email already exist' })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@ApiResponse({ status: 500, description: 'Code was not sent' })
	@UseGuards(JwtAuthGuard)
	@Post('/email')
	sendCodeEmail(@Req() request: Request, @Body() dto: SendCodeEmailDto): Promise<{ message: string }> {
		return this.authService.sendCodeEmail(request, dto);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Email confirmation' })
	@ApiResponse({ status: 201, description: 'Successful confirmation' })
	@ApiResponse({ status: 401, description: 'User is unauthorized' })
	@ApiResponse({ status: 403, description: "Wrong code or user doesn't have a confirmation code" })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@UseGuards(JwtAuthGuard)
	@Post('/email_confirmation')
	confirmCodeEmail(@Req() request: Request, @Body() dto: ConfirmCodeEmailDto): Promise<{ message: string }> {
		return this.authService.confirmCodeEmail(request, dto);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Updating user profile information' })
	@ApiResponse({ status: 201, description: 'Successful updating' })
	@ApiResponse({ status: 401, description: 'User is unauthorized' })
	@ApiResponse({ status: 403, description: 'Login or email already exist' })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@UseGuards(JwtAuthGuard)
	@Post('/update')
	@UseInterceptors(FileInterceptor('image'))
	update(
		@Req() request: Request,
		@Body() dto: UpdateUserDto,
		@UploadedFile() image?: any,
	): Promise<{ message: string }> {
		return this.authService.update(request, dto, image);
	}

	@ApiCookieAuth('refreshToken')
	@ApiOperation({ summary: 'Tokens refreshing' })
	@ApiResponse({ status: 201, description: 'Successful refreshing' })
	@ApiResponse({ status: 403, description: 'User is unauthorized' })
	@Post('/refresh')
	refresh(@Req() request: Request, @Res() response: Response): Promise<Response> {
		return this.authService.refresh(request, response);
	}
}
