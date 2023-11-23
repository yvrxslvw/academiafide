import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Role } from 'src/roles/role.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttributes {
	login: string;
	password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttributes> {
	@ApiProperty({ example: 1, description: 'Unique user identificator' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
	declare id: number;

	@ApiProperty({ example: 'yvrxslvw', description: 'User login' })
	@Column({ type: DataType.STRING(24), unique: true, allowNull: false })
	declare login: string;

	@ApiProperty({ example: null, description: 'User email' })
	@Column({ type: DataType.STRING(256), unique: true, allowNull: true })
	declare email: string;

	@ApiProperty({ example: 'IAmSecretPassword', description: 'User password' })
	@Column({ type: DataType.STRING(64), allowNull: false })
	declare password: string;

	@ApiProperty({ example: [], description: "User's roles" })
	@BelongsToMany(() => Role, () => UserRoles)
	declare roles: Role[];
}
