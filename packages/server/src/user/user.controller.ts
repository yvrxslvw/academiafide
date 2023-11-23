import { Body, Controller, Get, Param, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request, Response } from 'express';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({ summary: 'Edit user profile info [Authorized]' })
	@ApiResponse({ status: 200, description: 'Successfully editing user info' })
	@ApiResponse({ status: 400, description: 'Incorrect rows values' })
	@ApiResponse({ status: 403, description: 'If login already exists or user is unauthorized' })
	@UseGuards(JwtAuthGuard)
	@Post('/update')
	@UseInterceptors(FileInterceptor('image'))
	update(@Req() request: Request, @Body() dto: UpdateUserDto, @UploadedFile() image?: any) {
		return this.userService.update(request['user'].id, dto, image);
	}

	@ApiOperation({ summary: 'Sending recovery message' })
	@ApiResponse({ status: 200, description: 'Successfully sending email recovery message' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@ApiResponse({ status: 500, description: 'If message was not sent.' })
	@Post('/recovery')
	recovery(@Body() dto: RecoveryPasswordDto) {
		return this.userService.recovery(dto);
	}

	@ApiOperation({ summary: 'Recovery user account' })
	@ApiResponse({ status: 308, description: 'Redirect to the successful or error frontend page' })
	@Get('/recovery/:recoveryId')
	recoveryConfirm(@Param('recoveryId') recoveryId: string, @Res() response: Response) {
		return this.userService.recoveryConfirm(recoveryId, response);
	}

	@ApiOperation({ summary: 'Get user info [Authorized]' })
	@ApiResponse({ status: 200, description: 'Successfully getting user info' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@UseGuards(JwtAuthGuard)
	@Get()
	getInfo(@Req() request: Request) {
		return this.userService.getInfo(request['user'].id);
	}
}
