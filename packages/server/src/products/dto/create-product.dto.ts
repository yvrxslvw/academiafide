import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateProductDto {
	@ApiProperty({ example: 'I am a product!', description: 'Unique product title' })
	@IsString()
	@Length(3, 24)
	declare title: string;

	@ApiProperty({ example: 'I am a product description!', description: 'Product description' })
	@IsString()
	@IsNotEmpty()
	declare description: string;

	@ApiProperty({ example: 50, description: 'Product price' })
	@IsNumber()
	@IsNotEmpty()
	declare price: number;
}
