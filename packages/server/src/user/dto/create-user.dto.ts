import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@Length(3, 24)
	declare readonly login: string;

	@IsString({ message: 'Email must to be a string.' })
	@IsEmail()
	declare readonly email: string;

	@IsString({ message: 'Password must to be a string.' })
	@IsNotEmpty()
	declare readonly password: string;
}
