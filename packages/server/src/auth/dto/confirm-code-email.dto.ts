import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ConfirmCodeEmailDto {
	@ApiProperty({ example: 123456, description: 'Confirmation code' })
	@IsNumber()
	declare code: number;
}
