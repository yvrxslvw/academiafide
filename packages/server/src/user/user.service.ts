import { Injectable } from '@nestjs/common';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private readonly userRepo: typeof User) {}

	async create(userDto: CreateUserDto) {
		const loginExisted = await this.userRepo.findOne({ where: { login: userDto.login } });
		const emailExisted = await this.userRepo.findOne({ where: { email: userDto.email } });
		if (loginExisted) throw new ForbiddenException('Login already existed.');
		if (emailExisted) throw new ForbiddenException('Email already existed.');
		const user = await this.userRepo.create(userDto);
		return user;
	}

	async delete(id: number) {
		const user = await this.userRepo.findByPk(id);
		if (!user) throw new NotFoundException('User not found.');
		await user.destroy();
		return 'Deleted.';
	}

	async getAll() {
		const users = await this.userRepo.findAll({ include: { all: true, nested: true } });
		return users;
	}

	async getOneById(id: number) {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!user) throw new NotFoundException('User not found.');
		return user;
	}

	async getOneByLogin(login: string) {
		const user = await this.userRepo.findOne({ where: { login }, include: { all: true, nested: true } });
		return user;
	}

	async update(id: number, userDto: UpdateUserDto) {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!user) throw new NotFoundException('User not found.');
		await user.update({ ...userDto });
		return user;
	}
}
