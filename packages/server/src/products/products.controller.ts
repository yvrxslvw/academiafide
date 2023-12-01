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
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Product interactions')
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@ApiBearerAuth()
	@ApiOperation({ summary: 'Creating a product' })
	@ApiResponse({ status: 200, description: 'Successful product creation', type: Product })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 403, description: 'Product already exist' })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() dto: CreateProductDto, @UploadedFile() image?: any): Promise<Product> {
		return this.productsService.create(dto, image);
	}

	@ApiOperation({ summary: 'Getting all products' })
	@ApiResponse({ status: 200, description: 'Successfully getting all products', type: [Product] })
	@Get()
	getAll(): Promise<Product[]> {
		return this.productsService.getAll();
	}

	@ApiOperation({ summary: 'Getting a product by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting a product', type: Product })
	@ApiResponse({ status: 404, description: "Product doesn't exist" })
	@Get('/:id')
	getOneById(@Param('id') id: number): Promise<Product> {
		return this.productsService.getOneById(id);
	}

	@ApiBearerAuth()
	@ApiOperation({ summary: 'Updating a product' })
	@ApiResponse({ status: 200, description: 'Successfully product updation', type: Product })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Product doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	update(@Param('id') id: number, @Body() dto: UpdateProductDto, @UploadedFile() image?: any): Promise<Product> {
		return this.productsService.update(id, dto, image);
	}

	@ApiBearerAuth()
	@ApiOperation({ summary: 'Deleting a product' })
	@ApiResponse({ status: 200, description: 'Successful product deletion' })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Product doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number): Promise<{ message: string }> {
		return this.productsService.delete(id);
	}
}
