import { Controller, Put, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@Put()
	create(@Body() userDto: CreateUserDto) {
		return this.service.create(userDto);
	}
}
