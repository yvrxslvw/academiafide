import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel(Product) private readonly productRepo: typeof Product,
		private readonly filesService: FilesService,
	) {}

	async create(dto: CreateProductDto, image?: any): Promise<Product> {
		const candidate = await this.productRepo.findOne({ where: { title: dto.title } });
		if (candidate) throw new ForbiddenException('This product already exist.');
		const fileName = image ? await this.filesService.createFile(image) : null;
		const product = await this.productRepo.create({ ...dto, image: fileName, price: Number(dto.price) });
		return product;
	}

	async getAll(): Promise<Product[]> {
		const products = await this.productRepo.findAll({ attributes: { exclude: ['link'] } });
		return products;
	}

	async getOneById(id: number): Promise<Product> {
		const product = await this.productRepo.findByPk(id, { attributes: { exclude: ['link'] } });
		if (!product) throw new NotFoundException("Product doesn't exist.");
		return product;
	}

	async getOne(id: number): Promise<Product> {
		const product = await this.productRepo.findByPk(id);
		return product;
	}

	async update(id: number, dto: UpdateProductDto, image?: any): Promise<Product> {
		const product = await this.productRepo.findByPk(id);
		if (!product) throw new NotFoundException("Product doesn't exist.");
		if (dto.title) {
			const candidate = await this.productRepo.findOne({ where: { title: dto.title } });
			if (candidate) throw new ForbiddenException('This product already exist.');
		}
		if (image) {
			const fileName = await this.filesService.createFile(image);
			if (product.image) await this.filesService.deleteFile(product.image);
			await product.update({ image: fileName });
		}
		await product.update({ ...dto, price: Number(dto.price) });
		return product;
	}

	async delete(id: number): Promise<{ message: string }> {
		const product = await this.productRepo.findByPk(id);
		if (!product) throw new NotFoundException("Product doesn't exist.");
		if (product.image) await this.filesService.deleteFile(product.image);
		await product.destroy();
		return { message: 'Deleted.' };
	}
}
