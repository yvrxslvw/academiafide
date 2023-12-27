import { Injectable } from '@nestjs/common';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { RoleDto } from './dto/role.dto';
import { FilesService } from 'src/files/files.service';

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
		const user = await this.userRepo.create(dto);
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
		const { login, image, email, email_confirmed, email_news, createdAt, roles } = user;
		return {
			login,
			image,
			email,
			email_confirmed,
			email_news,
			createdAt,
			roles,
		};
	}

	async getOneByEmail(email: string, isEmailConfirmed: boolean): Promise<User> {
		const user = await this.userRepo.findOne({
			where: { email, email_confirmed: isEmailConfirmed },
			include: { all: true, nested: true },
		});
		return user;
	}

	async update(id: number, dto: UpdateUserDto, image?: any): Promise<User> {
		const user = await this.userRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!user) throw new NotFoundException("User doesn't exist.");
		if (dto.login) {
			const candidate = await this.userRepo.findOne({ where: { login: dto.login } });
			if (candidate) throw new ForbiddenException('Login already exist.');
		}
		if (image) {
			const fileName = await this.filesService.createFile(image);
			if (user.image) await this.filesService.deleteFile(user.image);
			await user.update({ image: fileName });
		}
		await user.update({ ...dto, recovery_password: null });
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
