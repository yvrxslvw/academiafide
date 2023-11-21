import { Controller, Put, Delete, Body, Get, Param, Res, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@ApiOperation({ summary: 'User creating' })
	@ApiResponse({ status: 200, description: 'Successfully creating user', type: User })
	@ApiResponse({ status: 403, description: 'If login or email already exists' })
	@Put()
	async create(@Res() res: Response, @Body() userDto: CreateUserDto) {
		const response = await this.service.create(userDto);
		res.status(response.getStatus()).send(response.getResponse());
	}

	@ApiOperation({ summary: 'User deleting' })
	@ApiResponse({ status: 200, description: 'Successfully deleting user' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Delete('/:id')
	async delete(@Res() res: Response, @Param('id') id: number) {
		const response = await this.service.delete(id);
		res.status(response.getStatus()).send(response.getResponse());
	}

	@ApiOperation({ summary: 'Getting all users' })
	@ApiResponse({ status: 200, description: 'Successfully getting all users', type: [User] })
	@Get()
	async getAll(@Res() res: Response) {
		const data = await this.service.getAll();
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Getting one user by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting one user', type: User })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Get('/:id')
	async getOneById(@Res() res: Response, @Param('id') id: number) {
		const data = await this.service.getOneById(id);
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'User updating' })
	@ApiResponse({ status: 200, description: 'Successfully user updating', type: User })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Patch('/:id')
	async update(@Res() res: Response, @Param('id') id: number, @Body() userDto: UpdateUserDto) {
		const data = await this.service.update(id, userDto);
		res.status(data.getStatus()).send(data.getResponse());
	}
}
