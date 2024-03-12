import { ApiProperty } from '@nestjs/swagger';
import { Model, Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

interface TransactionCreationAttributes {
	transactionId: string;
	productId: number;
	email: string;
	amount: number;
	status: string;
}

@Table({ tableName: 'transaction' })
export class Transaction extends Model<Transaction, TransactionCreationAttributes> {
	@ApiProperty({ example: '2FP39996WR568984K', description: 'Transaction ID' })
	@Column({ type: DataType.STRING(64), allowNull: false })
	declare transactionId: string;

	@ApiProperty({ example: '1', description: 'Product ID' })
	@Column({ type: DataType.INTEGER, allowNull: false })
	@ForeignKey(() => Product)
	declare productId: number;

	@ApiProperty({ example: 'example@website.com', description: "Buyer's email" })
	@Column({ type: DataType.STRING(256), allowNull: false })
	declare email: string;

	@ApiProperty({ example: 50, description: 'Transaction amount (EUR)' })
	@Column({ type: DataType.INTEGER, allowNull: false, comment: 'EUR' })
	declare amount: number;

	@ApiProperty({ example: 'COMPLETED', description: 'Transaction status' })
	@Column({ type: DataType.STRING(32), allowNull: false })
	declare status: string;
}
