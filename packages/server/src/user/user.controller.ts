import { Body, Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({ summary: 'Edit user profile info' })
	@ApiResponse({ status: 200, description: 'Successfully editing user info' })
	@ApiResponse({ status: 400, description: 'Incorrect rows values' })
	@ApiResponse({ status: 403, description: 'If login already exists or user is unauthorized' })
	@UseGuards(JwtAuthGuard)
	@Post('/update')
	@UseInterceptors(FileInterceptor('image'))
	update(@Req() request: Request, @Body() dto: UpdateUserDto, @UploadedFile() image?: any) {
		return this.userService.update(request['user'].id, dto, image);
	}
}
