import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateRoleDto {
	@ApiProperty({ example: 'ADMIN', description: 'Role tag' })
	@IsString()
	@Length(3, 24)
	declare tag: string;

	@ApiProperty({ example: 'Administrator', description: 'Role description' })
	@IsString()
	@Length(3, 32)
	declare description: string;
}
