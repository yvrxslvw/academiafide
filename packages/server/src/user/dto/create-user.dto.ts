import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({ example: 'yvrxslvw', description: 'User login' })
	@IsString()
	@Length(3, 24)
	declare readonly login: string;

	@ApiProperty({ example: 'yvrxslvv@gmail.com', description: 'User email' })
	@IsString({ message: 'Email must to be a string.' })
	@IsEmail()
	declare readonly email: string;

	@ApiProperty({ example: 'IAmSecretPassword', description: 'User password' })
	@IsString({ message: 'Password must to be a string.' })
	@IsNotEmpty()
	declare readonly password: string;
}