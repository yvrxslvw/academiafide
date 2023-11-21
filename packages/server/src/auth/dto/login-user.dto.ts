import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
	@ApiProperty({ example: 'yvrxslvw', description: 'User login' })
	@IsString()
	@IsNotEmpty()
	declare login: string;

	@ApiProperty({ example: 'IAmASecretPassword', description: 'User password' })
	@IsString()
	@IsNotEmpty()
	declare password: string;
}
