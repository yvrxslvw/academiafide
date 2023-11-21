import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteUserDto {
	@IsString()
	@IsNotEmpty()
	declare readonly login: string;
}
