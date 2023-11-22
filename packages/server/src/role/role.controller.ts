import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Role interactions')
@Controller('role')
export class RoleController {
	constructor(private readonly roleService: RoleService) {}

	@ApiOperation({ summary: 'Role creating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully creating role' })
	@ApiResponse({ status: 403, description: 'If role already exists' })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	create(@Body() dto: CreateRoleDto) {
		return this.roleService.create(dto);
	}
	
	@ApiOperation({ summary: 'Role deleting  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting role' })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.roleService.delete(id);
	}
	
	@ApiOperation({ summary: 'Getting all roles  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting all roles', type: [Role] })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get()
	getAll() {
		return this.roleService.findAll();
	}
	
	@ApiOperation({ summary: 'Getting one role by ID  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting one role by ID', type: Role })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.roleService.findOneById(id);
	}
	
	@ApiOperation({ summary: 'Role updating  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully updating role', type: Role })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	update(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
		return this.roleService.update(id, dto);
	}
}
