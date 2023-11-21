import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private readonly repo: typeof User) {}

	async create(userDto: CreateUserDto) {
		try {
			const loginExisted = await this.repo.findOne({ where: { login: userDto.login } });
			const emailExisted = await this.repo.findOne({ where: { email: userDto.email } });
			if (loginExisted) return new HttpException('Login already existed.', HttpStatus.FORBIDDEN);
			if (emailExisted) return new HttpException('Email already existed.', HttpStatus.FORBIDDEN);
			const user = await this.repo.create(userDto);
			return new HttpException(user, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async delete(id: number) {
		try {
			const user = await this.repo.findByPk(id);
			if (!user) return new HttpException('User not found.', HttpStatus.NOT_FOUND);
			await user.destroy();
			return new HttpException('Deleted.', HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async getAll() {
		try {
			const users = await this.repo.findAll({ include: { all: true, nested: true } });
			return new HttpException(users, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async getOneById(id: number) {
		try {
			const user = await this.repo.findByPk(id, { include: { all: true, nested: true } });
			if (!user) return new HttpException('User not found.', HttpStatus.NOT_FOUND);
			return new HttpException(user, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
