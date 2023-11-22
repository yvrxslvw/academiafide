import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.model';

interface PostCreationAttributes {
	userId: number;
	title: string;
	content: string;
	image: string;
}

@Table({ tableName: 'post' })
export class Post extends Model<Post, PostCreationAttributes> {
	@ApiProperty({ example: 1, description: 'Unique post identificator' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
	declare id: number;

	@ApiProperty({ example: 1, description: 'Author user identificator' })
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER, allowNull: false })
	declare userId: number;

	@ApiProperty({ example: 'I am a title', description: 'Post title' })
	@Column({ type: DataType.TEXT('tiny'), allowNull: false })
	declare title: string;

	@ApiProperty({ example: 'I am a content', description: 'Post content' })
	@Column({ type: DataType.TEXT, allowNull: false })
	declare content: string;

	@ApiProperty({ example: 'someImageName.jpg', description: 'Post image name that the backend has it' })
	@Column({ type: DataType.STRING(64), allowNull: true })
	declare image: string;

	@BelongsTo(() => User)
	declare author: User;
}
