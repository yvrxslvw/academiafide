import { Controller, Put, Delete, Body, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@ApiTags('User interaction')
@Controller('user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@ApiOperation({ summary: 'User creation' })
	@ApiResponse({ status: 200, description: 'Successfully user creation' })
	@ApiResponse({ status: 403, description: 'If login or email already exists' })
	@Put()
	create(@Body() userDto: CreateUserDto) {
		return this.service.create(userDto);
	}

	@ApiOperation({ summary: 'User deletion' })
	@ApiResponse({ status: 200, description: 'Successfully user deletion' })
	@ApiResponse({ status: 404, description: "If login doesn't exists" })
	@Delete()
	delete(@Body() userDto: DeleteUserDto) {
		return this.service.delete(userDto);
	}

	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({ status: 200, description: 'Successfully get all users' })
	@Get()
	getAll() {
		return this.service.getAll();
	}

	@ApiOperation({ summary: 'Get one user' })
	@ApiResponse({ status: 200, description: 'Successfully get one user' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Get('/:id')
	getOne(@Param('id') id: number) {
		return this.service.getOne(id);
	}
}
