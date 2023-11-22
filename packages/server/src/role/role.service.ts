import { Injectable } from '@nestjs/common';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
	constructor(@InjectModel(Role) private readonly roleRepo: typeof Role) {}

	async create(roleDto: CreateRoleDto) {
		const exists = await this.roleRepo.findOne({
			where: { [Op.or]: { tag: roleDto.tag, description: roleDto.description } },
		});
		if (exists) throw new ForbiddenException('This role already exists.');
		const role = await this.roleRepo.create(roleDto);
		return role;
	}

	async delete(id: number) {
		const role = await this.roleRepo.findByPk(id);
		if (!role) throw new NotFoundException("Role doesn't exists.");
		await role.destroy();
		return 'Deleted.';
	}

	async findAll() {
		const roles = await this.roleRepo.findAll({ include: { all: true, nested: true } });
		return roles;
	}

	async findOneById(id: number) {
		const role = await this.roleRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!role) throw new NotFoundException("Role doesn't exists");
		return role;
	}

	async findOneByTag(tag: string) {
		const role = await this.roleRepo.findOne({ where: { tag }, include: { all: true, nested: true } });
		if (!role) throw new NotFoundException("Role doesn't exists");
		return role;
	}

	async update(id: number, roleDto: UpdateRoleDto) {
		const role = await this.roleRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!role) throw new NotFoundException("Role doesn't exists");
		await role.update(roleDto);
		return role;
	}
}
