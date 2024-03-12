import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProductDto {
	@ApiProperty({ example: 'I am a product!', description: 'Unique product title' })
	@IsString()
	@Length(3, 24)
	declare title: string;

	@ApiProperty({ example: 'I am a product description!', description: 'Product description' })
	@IsString()
	@Length(3, 255)
	declare description: string;

	@ApiProperty({ example: 50, description: 'Product price' })
	@IsString()
	@IsNotEmpty()
	declare price: string;

	@ApiProperty({ example: 'https://youtube.com/123', description: 'Product link' })
	@IsString()
	@IsNotEmpty()
	declare link: string;
}
