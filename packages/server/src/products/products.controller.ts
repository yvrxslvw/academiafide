import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Put,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UpdateProductDto } from './dto/update-product.dto';

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

	@ApiOperation({ summary: 'Product creating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully creating new product', type: Product })
	@ApiResponse({ status: 403, description: "If product already exists or you don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() dto: CreateProductDto, @UploadedFile() image?: any) {
		return this.productsService.create(dto, image);
	}

	@ApiOperation({ summary: 'Product deleting [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting product' })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If product doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.productsService.delete(id);
	}

	@ApiOperation({ summary: 'Product updating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully updating product', type: Product })
	@ApiResponse({ status: 403, description: "If you don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "If product doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	update(@Param('id') id: number, @Body() dto: UpdateProductDto, @UploadedFile() image?: any) {
		return this.productsService.update(id, dto, image);
	}
}
