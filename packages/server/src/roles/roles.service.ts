import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { isString, length } from 'class-validator';

@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private readonly roleRepo: typeof Role) {}

	async create(dto: CreateRoleDto) {
		const exists = await this.roleRepo.findOne({
			where: { [Op.or]: { tag: dto.tag, description: dto.description } },
		});
		if (exists) throw new ForbiddenException('This role already exists.');
		const role = await this.roleRepo.create(dto);
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
		const role = await this.roleRepo.findOne({ where: { tag } });
		return role;
	}

	async update(id: number, dto: UpdateRoleDto) {
		const role = await this.roleRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!role) throw new NotFoundException("Role doesn't exists");
		if (dto.tag) {
			if (!isString(dto.tag) || !length(dto.tag, 3, 24)) throw new BadRequestException('Incorrect tag.');
			const exists = await this.roleRepo.findOne({ where: { tag: dto.tag } });
			if (exists) throw new ForbiddenException('This tag already exists.');
		}
		if (dto.description) {
			if (!isString(dto.description) || !length(dto.description, 3, 32))
				throw new BadRequestException('Incorrect description.');
			const exists = await this.roleRepo.findOne({ where: { description: dto.description } });
			if (exists) throw new ForbiddenException('This description already exists.');
		}
		await role.update(dto);
		return role;
	}
}
