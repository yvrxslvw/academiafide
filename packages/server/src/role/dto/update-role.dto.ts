import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
	@ApiProperty({ example: 'NEW', description: 'New role tag', required: false })
	declare tag?: string;

	@ApiProperty({ example: 'New role', description: 'New role description', required: false })
	declare description?: string;
}
