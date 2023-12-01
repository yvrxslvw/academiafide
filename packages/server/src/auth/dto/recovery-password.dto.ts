import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class RecoveryPasswordDto {
	@ApiProperty({ example: 'example@website.com', description: 'User email' })
	@IsEmail()
	declare email: string;
}
