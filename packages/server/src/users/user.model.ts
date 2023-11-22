import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Post } from 'src/posts/post.model';
import { Role } from 'src/roles/role.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttributes {
	login: string;
	email: string;
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

	@ApiProperty({ example: 'yvrxslvv@gmail.com', description: 'User email' })
	@Column({ type: DataType.STRING(256), unique: true, allowNull: false })
	declare email: string;

	@ApiProperty({ example: 'IAmSecretPassword', description: 'User password' })
	@Column({ type: DataType.STRING(64), allowNull: false })
	declare password: string;

	@ApiProperty({
		example: [],
		description: "User's posts",
	})
	@HasMany(() => Post)
	declare posts: Post[];

	@ApiProperty({ example: [], description: "User's roles" })
	@BelongsToMany(() => Role, () => UserRoles)
	declare roles: Role[];
}
