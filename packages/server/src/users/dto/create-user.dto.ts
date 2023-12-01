import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({ example: 'yvrxslvw', description: 'User login' })
	@IsString()
	@Length(3, 24)
	declare login: string;

	@ApiProperty({ example: 'IAmSecretPassword', description: 'User password' })
	@IsString()
	@IsNotEmpty()
	declare password: string;
}
