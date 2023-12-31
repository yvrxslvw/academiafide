import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SendCodeEmailDto {
	@ApiProperty({ example: 'example@website.com', description: 'User email' })
	@IsEmail()
	declare email: string;

	@ApiProperty({ example: true, description: 'If user want to resend code' })
	declare resend?: boolean;
}
