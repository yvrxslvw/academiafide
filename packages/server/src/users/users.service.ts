import { Injectable } from '@nestjs/common';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { RoleDto } from './dto/role.dto';
import { FilesService } from 'src/files/files.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User) private readonly userRepo: typeof User,
		private readonly rolesService: RolesService,
		private readonly filesService: FilesService,
	) {}

	async create(dto: CreateUserDto): Promise<User> {
		const candidate = await this.userRepo.findOne({ where: { login: dto.login } });
		if (candidate) throw new ForbiddenException('Login already exist.');
		const { id } = await this.userRepo.create(dto);
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		const role = await this.rolesService.findOneByTag('USER');
		await user.$set('roles', [role.id]);
		user.roles = [role];
		return user;
	}

	async getAll(): Promise<User[]> {
		const users = await this.userRepo.findAll({ include: { all: true, nested: true } });
		return users;
	}

	async getOneById(id: number): Promise<User> {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!user) throw new NotFoundException("User doesn't exist.");
		return user;
	}

	async getOneByLogin(login: string): Promise<User> {
		const user = await this.userRepo.findOne({ where: { login }, include: { all: true, nested: true } });
		return user;
	}

	async getOneByName(name: string) {
		const user = await this.userRepo.findOne({
			where: { login: name },
			include: { all: true, nested: true },
		});
		if (!user) throw new NotFoundException('User not found.');
		const { id, login, image, email, email_confirmed, email_news, createdAt, roles } = user;
		return {
			id,
			login,
			image,
			email,
			email_confirmed,
			email_news,
			createdAt,
			roles,
		};
	}

	async getOneByEmail(email: string, isEmailConfirmed?: boolean): Promise<User> {
		const user = await this.userRepo.findOne({
			where: { email },
			include: { all: true, nested: true },
		});
		if (isEmailConfirmed !== undefined) {
			if (isEmailConfirmed === user.email_confirmed) return user;
			else return null;
		} else return user;
	}

	async update(id: number, dto: UpdateUserDto, image?: any): Promise<User> {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!user) throw new NotFoundException("User doesn't exist.");
		if (dto.login) {
			const candidate = await this.userRepo.findOne({ where: { login: dto.login } });
			if (candidate && candidate.login !== user.login)
				throw new ForbiddenException({ error: 'login', message: 'This login already exist.', statusCode: 403 });
		}
		if (dto.email) {
			const candidate = await this.userRepo.findOne({ where: { email: dto.email } });
			if (candidate && candidate.email !== user.email)
				throw new ForbiddenException({ error: 'email', message: 'This email already exist.', statusCode: 403 });
			else {
				dto.email_news = false;
				await user.update({ email_confirmed: false });
			}
		}
		if (image) {
			const fileName = await this.filesService.createFile(image);
			if (user.image) await this.filesService.deleteFile(user.image);
			await user.update({ image: fileName });
		}
		if (dto.password) {
			dto.password = await bcrypt.hash(dto.password, 5);
			await user.update({ recovery_password: null });
		}
		await user.update({ ...dto, email_news: Boolean(dto.email_news) });
		return user;
	}

	async delete(id: number): Promise<{ message: string }> {
		const user = await this.userRepo.findByPk(id);
		if (!user) throw new NotFoundException("User doesn't exist.");
		await user.destroy();
		return { message: 'Deleted.' };
	}

	async addRole(id: number, dto: RoleDto): Promise<User> {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		const role = await this.rolesService.findOneByTag(dto.tag);
		if (!user || !role) throw new NotFoundException("User or role doesn't exist.");
		if (await user.$has('role', role.id)) throw new ForbiddenException('User already has this role.');
		await user.$add('role', role.id);
		return user;
	}

	async removeRole(id: number, dto: RoleDto): Promise<User> {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		const role = await this.rolesService.findOneByTag(dto.tag);
		if (!user || !role) throw new NotFoundException('User or role has not been found.');
		if (!(await user.$has('role', role.id))) throw new ForbiddenException("User doesn't have this role.");
		await user.$remove('role', role.id);
		return user;
	}
}
