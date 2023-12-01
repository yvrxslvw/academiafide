import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface PostCreationAttributes {
	title: string;
	content: string;
	image: string;
}

@Table({ tableName: 'post' })
export class Post extends Model<Post, PostCreationAttributes> {
	@ApiProperty({ example: 1, description: 'Unique post identificator' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
	declare id: number;

	@ApiProperty({ example: 'I am a title', description: 'Post title' })
	@Column({ type: DataType.TEXT('tiny'), allowNull: false })
	declare title: string;

	@ApiProperty({ example: 'I am a content', description: 'Post content' })
	@Column({ type: DataType.STRING(4096), allowNull: false })
	declare content: string;

	@ApiProperty({ example: 'someImageName.jpg', description: 'Post image' })
	@Column({ type: DataType.STRING(64), allowNull: true })
	declare image: string;
}
