import { Body, Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('Role interactions')
@Controller('role')
export class RoleController {
	constructor(private readonly roleService: RoleService) {}

	@ApiOperation({ summary: 'Role creating' })
	@ApiResponse({ status: 200, description: 'Successfully creating role' })
	@ApiResponse({ status: 403, description: 'If role already exists' })
	@Put()
	create(@Body() roleDto: CreateRoleDto) {
		return this.roleService.create(roleDto);
	}

	@ApiOperation({ summary: 'Role deleting' })
	@ApiResponse({ status: 200, description: 'Successfully deleting role' })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.roleService.delete(id);
	}

	@ApiOperation({ summary: 'Getting all roles' })
	@ApiResponse({ status: 200, description: 'Successfully getting all roles', type: [Role] })
	@Get()
	getAll() {
		return this.roleService.findAll();
	}

	@ApiOperation({ summary: 'Getting one role by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting one role by ID', type: Role })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.roleService.findOneById(id);
	}

	@ApiOperation({ summary: 'Role updating' })
	@ApiResponse({ status: 200, description: 'Successfully updating role', type: Role })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Patch('/:id')
	update(@Param('id') id: number, @Body() roleDto: UpdateRoleDto) {
		return this.roleService.update(id, roleDto);
	}
}
