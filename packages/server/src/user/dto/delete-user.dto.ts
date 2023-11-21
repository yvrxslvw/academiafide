import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteUserDto {
	@ApiProperty({ example: 'yvrxslvw', description: 'User login' })
	@IsString()
	@IsNotEmpty()
	declare readonly login: string;
}
