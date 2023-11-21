import { Table, Model, Column, DataType } from 'sequelize-typescript';

interface UserCreationAttributes {
	login: string;
	email: string;
	password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttributes> {
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
	declare id: number;
	
	@Column({ type: DataType.STRING(24), unique: true, allowNull: false })
	declare login: string;

	@Column({ type: DataType.STRING(256), unique: true, allowNull: false })
	declare email: string;

	@Column({ type: DataType.STRING(64), allowNull: false })
	declare password: string;
}
