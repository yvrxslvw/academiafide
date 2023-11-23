import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { RoleDto } from './dto/role.dto';
import { isEmail, isString, length } from 'class-validator';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private readonly userRepo: typeof User, private readonly rolesService: RolesService) {}

	async create(dto: CreateUserDto) {
		const loginExisted = await this.userRepo.findOne({ where: { login: dto.login } });
		if (loginExisted) throw new ForbiddenException('Login already existed.');
		const user = await this.userRepo.create(dto);
		const role = await this.rolesService.findOneByTag('USER');
		if (role) {
			await user.$set('roles', [role.id]);
			user.roles = [role];
		}
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

	async getOneByEmail(email: string) {
		const user = await this.userRepo.findOne({ where: { email }, include: { all: true, nested: true } });
		return user;
	}

	async update(id: number, dto: UpdateUserDto) {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!user) throw new NotFoundException('User not found.');
		if (dto.login) {
			if (!isString(dto.login) || !length(dto.login, 3, 24)) throw new BadRequestException('Incorrect login.');
			const exists = await this.userRepo.findOne({ where: { login: dto.login } });
			if (exists) throw new ForbiddenException('Login already exists.');
		}
		if (dto.email) {
			if (!isEmail(dto.email)) throw new BadRequestException('Incorrect email.');
			const exists = await this.userRepo.findOne({ where: { email: dto.email } });
			if (exists) throw new ForbiddenException('Email already exists.');
		}
		if (dto.password) {
			if (!isString(dto.password)) throw new BadRequestException('Incorrect password.');
		}
		await user.update({ ...dto });
		return user;
	}

	async addRole(id: number, dto: RoleDto) {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		const role = await this.rolesService.findOneByTag(dto.tag);
		if (!user || !role) throw new NotFoundException('User or role has not been found.');
		if (await user.$has('role', role.id)) throw new ForbiddenException('User already have this role.');
		await user.$add('role', role.id);
		return role;
	}

	async removeRole(id: number, dto: RoleDto) {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		const role = await this.rolesService.findOneByTag(dto.tag);
		if (!user || !role) throw new NotFoundException('User or role has not been found.');
		if (!(await user.$has('role', role.id))) throw new ForbiddenException("User haven't this role.");
		await user.$remove('role', role.id);
		return role;
	}
}
