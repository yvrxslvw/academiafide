import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
	constructor(@InjectModel(Product) private readonly productRepo: typeof Product) {}

	async getAll() {
		const products = await this.productRepo.findAll();
		return products;
	}

	async getOneById(id: number) {
		const product = await this.productRepo.findByPk(id);
		if (!product) throw new NotFoundException("Product doesn't exists.");
		return product;
	}
}
