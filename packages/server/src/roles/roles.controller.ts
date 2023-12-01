import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Role interactions')
@Controller('roles')
export class RolesController {
	constructor(private readonly rolesService: RolesService) {}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Creating a role' })
	@ApiResponse({ status: 200, description: 'Successful role creation', type: Role })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 403, description: 'Role already exist' })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	create(@Body() dto: CreateRoleDto): Promise<Role> {
		return this.rolesService.create(dto);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Getting all roles' })
	@ApiResponse({ status: 200, description: 'Successfully getting all roles', type: [Role] })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get()
	getAll(): Promise<Role[]> {
		return this.rolesService.findAll();
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Getting a role by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting a role', type: Role })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Role doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Get('/:id')
	getOneById(@Param('id') id: number): Promise<Role> {
		return this.rolesService.findOneById(id);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Updating a role' })
	@ApiResponse({ status: 200, description: 'Successful role updation', type: Role })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Role doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	update(@Param('id') id: number, @Body() dto: UpdateRoleDto): Promise<Role> {
		return this.rolesService.update(id, dto);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Deleting a role' })
	@ApiResponse({ status: 200, description: 'Successful role deletion' })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Role doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number): Promise<{ message: string }> {
		return this.rolesService.delete(id);
	}
}
