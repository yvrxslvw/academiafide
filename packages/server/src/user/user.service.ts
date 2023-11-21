import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private readonly repo: typeof User) {}

	async create(userDto: CreateUserDto) {
		try {
			const loginExisted = await this.repo.findOne({ where: { login: userDto.login } });
			const emailExisted = await this.repo.findOne({ where: { email: userDto.email } });
			if (loginExisted) return new HttpException('Login already existed.', HttpStatus.FORBIDDEN);
			if (emailExisted) return new HttpException('Email already existed.', HttpStatus.FORBIDDEN);
			this.repo.create(userDto);
			return new HttpException('', HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async delete(userDto: DeleteUserDto) {
		try {
			const user = await this.repo.findOne({ where: { login: userDto.login } });
			if (!user) return new HttpException('Login not found.', HttpStatus.NOT_FOUND);
			await user.destroy();
			return new HttpException('', HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
