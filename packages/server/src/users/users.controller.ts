import { Controller, Put, Delete, Body, Get, Param, Patch, UseGuards, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { RoleDto } from './dto/role.dto';
import { Role } from 'src/roles/role.model';
import { SendCodeEmailDto } from './dto/send-code-email.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
import { ConfirmCodeEmailDto } from './dto/confirm-code-email.dto';

@ApiTags('User interactions')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@ApiOperation({ summary: 'User creating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully creating user', type: User })
	@ApiResponse({ status: 403, description: "If login already exists or you don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	create(@Body() dto: CreateUserDto) {
		return this.usersService.create(dto);
	}

	@ApiOperation({ summary: 'User deleting [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting user' })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.usersService.delete(id);
	}

	@ApiOperation({ summary: 'Getting all users [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting all users', type: [User] })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get()
	getAll() {
		return this.usersService.getAll();
	}

	@ApiOperation({ summary: 'Getting one user by ID [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting one user', type: User })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.usersService.getOneById(id);
	}

	@ApiOperation({ summary: 'User updating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully user updating', type: User })
	@ApiResponse({ status: 403, description: "If login or email already exists or you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
		return this.usersService.update(id, dto);
	}

	@ApiOperation({ summary: 'User role adding [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully adding role', type: Role })
	@ApiResponse({ status: 403, description: "If user already have this role or you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If user or role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put('/:id/role')
	addRole(@Param('id') id: number, @Body() dto: RoleDto) {
		return this.usersService.addRole(id, dto);
	}

	@ApiOperation({ summary: 'User role deleting [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting role', type: Role })
	@ApiResponse({ status: 403, description: "If user haven't this role or you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If user or role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id/role')
	removeRole(@Param('id') id: number, @Body() dto: RoleDto) {
		return this.usersService.removeRole(id, dto);
	}

	@ApiOperation({ summary: 'Sending email confirmation code [Authorized]' })
	@ApiResponse({ status: 200, description: 'Successfully sending the code' })
	@ApiResponse({ status: 403, description: 'If email already exists or user is unauthorized' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@ApiResponse({ status: 500, description: 'If the code was not sent' })
	@UseGuards(JwtAuthGuard)
	@Post('/email')
	sendCodeEmail(@Req() request: Request, @Body() dto: SendCodeEmailDto) {
		return this.usersService.sendCodeEmail(request['user'].id, dto);
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
		return this.usersService.confirmCodeEmail(request['user'].id, dto);
	}
}
