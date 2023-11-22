import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
	@ApiProperty({ example: 'I am a product!', description: 'Unique product title' })
	declare title?: string;

	@ApiProperty({ example: 'I am a product description!', description: 'Product description' })
	declare description?: string;

	@ApiProperty({ example: 50, description: 'Product price' })
	declare price?: number;
}
