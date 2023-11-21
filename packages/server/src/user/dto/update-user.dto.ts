import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
	@ApiProperty({ example: 'newyvrxslvw', description: 'New user login', required: false })
	declare login?: string;

	@ApiProperty({ example: 'new_email@gmail.com', description: 'New user email', required: false })
	declare email?: string;

	@ApiProperty({ example: 'newSecretPassword', description: 'New user password', required: false })
	declare password?: string;
}
