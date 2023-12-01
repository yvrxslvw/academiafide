import { Injectable } from '@nestjs/common';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private readonly roleRepo: typeof Role) {}

	async create(dto: CreateRoleDto): Promise<Role> {
		const candidate = await this.roleRepo.findOne({
			where: { [Op.or]: { tag: dto.tag, description: dto.description } },
		});
		if (candidate) throw new ForbiddenException('This role already exist.');
		const role = await this.roleRepo.create(dto);
		return role;
	}

	async findAll(): Promise<Role[]> {
		const roles = await this.roleRepo.findAll({ include: { all: true, nested: true } });
		return roles;
	}

	async findOneById(id: number): Promise<Role> {
		const role = await this.roleRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!role) throw new NotFoundException("Role doesn't exist");
		return role;
	}

	async findOneByTag(tag: string): Promise<Role> {
		const role = await this.roleRepo.findOne({ where: { tag } });
		return role;
	}

	async update(id: number, dto: UpdateRoleDto): Promise<Role> {
		const role = await this.roleRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!role) throw new NotFoundException("Role doesn't exist");
		if (dto.tag) {
			const candidate = await this.roleRepo.findOne({ where: { tag: dto.tag } });
			if (candidate) throw new ForbiddenException('This tag already exist.');
		}
		if (dto.description) {
			const candidate = await this.roleRepo.findOne({ where: { description: dto.description } });
			if (candidate) throw new ForbiddenException('This description already exist.');
		}
		await role.update(dto);
		return role;
	}

	async delete(id: number): Promise<{ message: string }> {
		const role = await this.roleRepo.findByPk(id);
		if (!role) throw new NotFoundException("Role doesn't exist.");
		await role.destroy();
		return { message: 'Deleted.' };
	}
}
