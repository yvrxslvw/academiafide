import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from 'src/files/files.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { isString, length } from 'class-validator';

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel(Product) private readonly productRepo: typeof Product,
		private readonly filesService: FilesService,
	) {}

	async getAll() {
		const products = await this.productRepo.findAll();
		return products;
	}

	async getOneById(id: number) {
		const product = await this.productRepo.findByPk(id);
		if (!product) throw new NotFoundException("Product doesn't exists.");
		return product;
	}

	async create(dto: CreateProductDto, image?: any) {
		const exists = await this.productRepo.findOne({ where: { title: dto.title } });
		if (exists) throw new ForbiddenException('This product already exists.');
		const fileName = image ? await this.filesService.createFile(image) : null;
		const product = await this.productRepo.create({ ...dto, image: fileName, price: Number(dto.price) });
		return product;
	}

	async delete(id: number) {
		const product = await this.productRepo.findByPk(id);
		if (!product) throw new NotFoundException("Product doesn't exists.");
		if (product.image) await this.filesService.deleteFile(product.image);
		await product.destroy();
		return { message: 'Deleted.' };
	}

	async update(id: number, dto: UpdateProductDto, image?: any) {
		const product = await this.productRepo.findByPk(id);
		if (!product) throw new NotFoundException("Product doesn't exists.");
		if (dto.title) {
			if (!isString(dto.title) || !length(dto.title, 3, 24)) throw new BadRequestException('Incorrect title.');
			const exists = await this.productRepo.findOne({ where: { title: dto.title } });
			if (exists) throw new ForbiddenException('This product already exists.');
		}
		if (dto.description) {
			if (!isString(dto.description) || !length(dto.description, 3, 255))
				throw new BadRequestException('Incorrect description.');
		}
		if (image) {
			const fileName = await this.filesService.createFile(image);
			if (product.image) await this.filesService.deleteFile(product.image);
			await product.update({ image: fileName });
		}
		await product.update({ ...dto });
		return product;
	}
}
