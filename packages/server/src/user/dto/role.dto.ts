import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class RoleDto {
	@ApiProperty({ example: 'ADMIN', description: 'Role tag' })
	@IsString()
	@Length(3, 24)
	declare tag: string;
}
