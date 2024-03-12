import { ApiProperty } from '@nestjs/swagger';
import { Model, Column, DataType, Table, HasMany } from 'sequelize-typescript';
import { Transaction } from 'src/orders/entities/transaction.entity';

interface ProductCreationAttributes {
	title: string;
	description: string;
	price: number;
	image?: string;
}

@Table({ tableName: 'product' })
export class Product extends Model<Product, ProductCreationAttributes> {
	@ApiProperty({ example: 1, description: 'Unique product identificator' })
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	declare id: number;

	@ApiProperty({ example: 'I am a product!', description: 'Unique product title' })
	@Column({ type: DataType.STRING(24), unique: true, allowNull: false })
	declare title: string;

	@ApiProperty({ example: 'I am a product description!', description: 'Product description' })
	@Column({ type: DataType.TEXT('tiny'), allowNull: false })
	declare description: string;

	@ApiProperty({ example: 50, description: 'Product price (EUR)' })
	@Column({ type: DataType.INTEGER, allowNull: false, comment: 'EUR' })
	declare price: number;

	@ApiProperty({ example: 'product.jpg', description: 'Product image' })
	@Column({ type: DataType.STRING(64), allowNull: true })
	declare image: string;

	@ApiProperty({ example: 'https://youtube.com/123', description: 'Product link' })
	@Column({ type: DataType.STRING(256), allowNull: false })
	declare link: string;

	@HasMany(() => Transaction)
	declare transactions: Transaction[];
}
