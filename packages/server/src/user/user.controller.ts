import { Controller, Put, Delete, Body, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly service: UserService) {}

	@ApiOperation({ summary: 'User creation' })
	@ApiResponse({ status: 200, description: 'Successfully user creation' })
	@ApiResponse({ status: 403, description: 'If login or email already exists' })
	@Put()
	async create(@Res() res: Response, @Body() userDto: CreateUserDto) {
		const response = await this.service.create(userDto);
		res.status(response.getStatus()).send(response.getResponse());
	}

	@ApiOperation({ summary: 'User deletion' })
	@ApiResponse({ status: 200, description: 'Successfully user deletion' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Delete('/:id')
	async delete(@Res() res: Response, @Param('id') id: number) {
		const response = await this.service.delete(id);
		res.status(response.getStatus()).send(response.getResponse());
	}

	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({ status: 200, description: 'Successfully get all users' })
	@Get()
	async getAll(@Res() res: Response) {
		const data = await this.service.getAll();
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Get one user by ID' })
	@ApiResponse({ status: 200, description: 'Successfully get one user' })
	@ApiResponse({ status: 404, description: "If user doesn't exists" })
	@Get('/:id')
	async getOneById(@Res() res: Response, @Param('id') id: number) {
		const data = await this.service.getOneById(id);
		res.status(data.getStatus()).send(data.getResponse());
	}
}
