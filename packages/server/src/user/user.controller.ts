import { Controller, Put, Delete, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@Put()
	create(@Body() userDto: CreateUserDto) {
		return this.service.create(userDto);
	}

	@Delete()
	delete(@Body() userDto: DeleteUserDto) {
		return this.service.delete(userDto);
	}

	@Get()
	getAll() {
		return this.service.getAll();
	}

	@Get('/:id')
	getOne(@Param('id') id: number) {
		return this.service.getOne(id);
	}
}
