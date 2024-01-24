import { ApiProperty } from '@nestjs/swagger';
import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface TransactionCreationAttributes {
	title: string;
	description: string;
	price: number;
	image?: string;
}

@Table({ tableName: 'transaction', updatedAt: false })
export class Transaction extends Model<Transaction, TransactionCreationAttributes> {
	@ApiProperty({ example: '2FP39996WR568984K', description: 'Transaction ID' })
	@Column({ type: DataType.STRING(64), allowNull: false })
	declare transactionId: string;

	@ApiProperty({ example: 'example@website.com', description: "Buyer's email" })
	@Column({ type: DataType.STRING(256), allowNull: false })
	declare email: string;

	@ApiProperty({ example: 50, description: 'Transaction amount (EUR)' })
	@Column({ type: DataType.INTEGER, allowNull: false, comment: 'EUR' })
	declare amount: number;
}
