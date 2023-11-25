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

	@ApiProperty({ example: 'avatar.jpg', description: 'User profile image' })
	@Column({ type: DataType.STRING(64), allowNull: true })
	declare image: string;

	@ApiProperty({ example: null, description: 'User email' })
	@Column({ type: DataType.STRING(256), unique: true, allowNull: true })
	declare email: string;

	@ApiProperty({ example: null, description: 'Email confirmation code' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	declare email_code: number;

	@ApiProperty({ example: false, description: 'Is user email confirmed' })
	@Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
	declare email_confirmed: boolean;

	@ApiProperty({ example: false, description: 'Whether to send news to the user' })
	@Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
	declare email_news: boolean;

	@ApiProperty({ example: 'IAmSecretPassword', description: 'User password' })
	@Column({ type: DataType.STRING(64), allowNull: false })
	declare password: string;

	@ApiProperty({ example: null, description: 'Recovery password' })
	@Column({ type: DataType.STRING(64), allowNull: true })
	declare recovery_password: string;

	@ApiProperty({ example: [], description: "User's roles" })
	@BelongsToMany(() => Role, () => UserRoles)
	declare roles: Role[];
}
