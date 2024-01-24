import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber } from 'class-validator';

export class CartDto {
	@ApiProperty({ example: 1, description: "Product's ID" })
	@IsNumber()
	declare productId: number;

	@ApiProperty({ example: 'example@website.com', description: "Buyer's email" })
	@IsEmail()
	declare email: string;
}
