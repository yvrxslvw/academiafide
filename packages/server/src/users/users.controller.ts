import { Controller, Put, Delete, Body, Get, Param, Patch, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RoleDto } from './dto/role.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('User interactions')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Getting all users' })
	@ApiResponse({ status: 200, description: 'Successfully getting all users', type: [User] })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get()
	getAll(): Promise<User[]> {
		return this.usersService.getAll();
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Getting a user by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting a user', type: User })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get('/:id')
	getOneById(@Param('id') id: number): Promise<User> {
		return this.usersService.getOneById(id);
	}

	@ApiOperation({ summary: 'Getting a user by login' })
	@ApiResponse({ status: 200, description: 'Successfully getting a user info' })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@Get('/info/:login')
	getOneByLogin(@Param('login') login: string) {
		return this.usersService.getOneByName(login);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Updating a user' })
	@ApiResponse({ status: 200, description: 'Successful user updation', type: User })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 403, description: 'Login already exists' })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	update(@Param('id') id: number, @Body() dto: UpdateUserDto, @UploadedFile() image?: any): Promise<User> {
		return this.usersService.update(id, dto, image);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Deleting a user' })
	@ApiResponse({ status: 200, description: 'Successful user deletion' })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "User doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number): Promise<{ message: string }> {
		return this.usersService.delete(id);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Adding role to a user' })
	@ApiResponse({ status: 200, description: 'Successful addition of role', type: User })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 403, description: 'User already has this role' })
	@ApiResponse({ status: 404, description: "User or role doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put('/:id/roles')
	addRole(@Param('id') id: number, @Body() dto: RoleDto): Promise<User> {
		return this.usersService.addRole(id, dto);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Removing role from a user' })
	@ApiResponse({ status: 200, description: 'Successful role deletion', type: User })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 403, description: "User doesn't have this role" })
	@ApiResponse({ status: 404, description: "User or role doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id/roles')
	removeRole(@Param('id') id: number, @Body() dto: RoleDto): Promise<User> {
		return this.usersService.removeRole(id, dto);
	}
}
