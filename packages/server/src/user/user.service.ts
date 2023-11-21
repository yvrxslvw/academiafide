import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InternalServerErrorException, UnauthorizedException, ForbiddenException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private readonly repo: typeof User) {}

	async create(userDto: CreateUserDto) {
		const loginExisted = await this.repo.findOne({ where: { login: userDto.login } });
		const emailExisted = await this.repo.findOne({ where: { email: userDto.email } });
		if (loginExisted) throw new ForbiddenException('Login already existed.');
		if (emailExisted) throw new ForbiddenException('Email already existed.');
		const user = await this.repo.create(userDto);
		return user;
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

	async getOneByLogin(login: string) {
		try {
			const user = await this.repo.findOne({ where: { login }, include: { all: true, nested: true } });
			return user;
		} catch (error) {
			console.error(error);
			throw new InternalServerErrorException('An unexpected error occurred...');
		}
	}

	async update(id: number, userDto: UpdateUserDto) {
		try {
			const user = await this.repo.findByPk(id, { include: { all: true, nested: true } });
			if (!user) return new HttpException('User not found.', HttpStatus.NOT_FOUND);
			await user.update({ ...userDto });
			return new HttpException(user, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
