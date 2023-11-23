import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
	@ApiProperty({ example: 'newyvrxslvw', description: 'New user login', required: false })
	declare login?: string;

	@ApiProperty({ example: 'newSecretPassword', description: 'New user password', required: false })
	declare password?: string;

	@ApiProperty({ example: true, description: 'Activate email news subscription', required: false })
	declare email_news?: boolean;
}
