import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Role interactions')
@Controller('roles')
export class RolesController {
	constructor(private readonly rolesService: RolesService) {}

	@ApiOperation({ summary: 'Role creating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully creating role' })
	@ApiResponse({ status: 403, description: "If role already exists or you don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	create(@Body() dto: CreateRoleDto) {
		return this.rolesService.create(dto);
	}
	
	@ApiOperation({ summary: 'Role deleting  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting role' })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.rolesService.delete(id);
	}
	
	@ApiOperation({ summary: 'Getting all roles  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting all roles', type: [Role] })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role", type: [Role] })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get()
	getAll() {
		return this.rolesService.findAll();
	}
	
	@ApiOperation({ summary: 'Getting one role by ID  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully getting one role by ID', type: Role })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.rolesService.findOneById(id);
	}
	
	@ApiOperation({ summary: 'Role updating  [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully updating role', type: Role })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If role doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	update(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
		return this.rolesService.update(id, dto);
	}
}
