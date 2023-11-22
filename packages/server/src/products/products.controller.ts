import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@ApiTags('Product interactions')
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@ApiOperation({ summary: 'Getting all products' })
	@ApiResponse({ status: 200, description: 'Successfully getting all products', type: [Product] })
	@Get()
	getAll() {
		return this.productsService.getAll();
	}

	@ApiOperation({ summary: 'Getting one product by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting one product by ID', type: Product })
	@ApiResponse({ status: 404, description: "If product doesn't exists" })
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.productsService.getOneById(id);
	}
}
