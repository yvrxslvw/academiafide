import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@Length(3, 24)
	readonly login: string;

	@IsString({ message: 'Email must to be a string.' })
	@IsEmail()
	readonly email: string;

	@IsString({ message: 'Password must to be a string.' })
	@IsNotEmpty()
	readonly password: string;
}
