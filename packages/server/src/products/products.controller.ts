import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiTags('Product interactions')
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}
}
