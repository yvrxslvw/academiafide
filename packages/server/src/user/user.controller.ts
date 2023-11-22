import { Controller, Put, Delete, Body, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { RoleDto } from './dto/role.dto';
import { Role } from 'src/role/role.model';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({ summary: 'User creating [ADMIN]' })
	@ApiResponse({ status: 201, description: 'Successfully creating user', type: User })
	@ApiResponse({ status: 403, description: 'If login or email already exists' })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	create(@Body() userDto: CreateUserDto) {
		return this.userService.create(userDto);
	}

	@ApiOperation({ summary: 'User deleting [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting user' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.userService.delete(id);
	}

	@ApiOperation({ summary: 'Getting all users [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting all users', type: [User] })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get()
	getAll() {
		return this.userService.getAll();
	}

	@ApiOperation({ summary: 'Getting one user by ID [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting one user', type: User })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.userService.getOneById(id);
	}

	@ApiOperation({ summary: 'User updating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully user updating', type: User })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
		return this.userService.update(id, userDto);
	}

	@ApiOperation({ summary: 'User role adding [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully adding role', type: Role })
	@ApiResponse({ status: 403, description: "If user already have this role." })
	@ApiResponse({ status: 404, description: "If user or role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put('/:id/role')
	addRole(@Param('id') id: number, @Body() userDto: RoleDto) {
		return this.userService.addRole(id, userDto);
	}

	@ApiOperation({ summary: 'User role deleting [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting role', type: Role })
	@ApiResponse({ status: 403, description: "If user haven't this role." })
	@ApiResponse({ status: 404, description: "If user or role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id/role')
	removeRole(@Param('id') id: number, @Body() userDto: RoleDto) {
		return this.userService.removeRole(id, userDto);
	}
}
