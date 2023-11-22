import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
	constructor(@InjectModel(Product) private readonly productRepo: typeof Product) {}
}
