import { Controller, Put, Delete, Body, Get, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@ApiOperation({ summary: 'User creating' })
	@ApiResponse({ status: 201, description: 'Successfully creating user', type: User })
	@ApiResponse({ status: 403, description: 'If login or email already exists' })
	@Put()
	create(@Body() userDto: CreateUserDto) {
		return this.service.create(userDto);
	}

	@ApiOperation({ summary: 'User deleting' })
	@ApiResponse({ status: 200, description: 'Successfully deleting user' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.service.delete(id);
	}

	@ApiOperation({ summary: 'Getting all users' })
	@ApiResponse({ status: 200, description: 'Successfully getting all users', type: [User] })
	@Get()
	getAll() {
		return this.service.getAll();
	}

	@ApiOperation({ summary: 'Getting one user by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting one user', type: User })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.service.getOneById(id);
	}

	@ApiOperation({ summary: 'User updating' })
	@ApiResponse({ status: 200, description: 'Successfully user updating', type: User })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Patch('/:id')
	update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
		return this.service.update(id, userDto);
	}
}
