import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
	@ApiProperty({ example: 1, description: 'Author user identificator' })
	@IsNumber()
	@IsNotEmpty()
	declare userId: number;

	@ApiProperty({ example: 'I am a title!', description: 'Title of the post' })
	@IsString()
	@IsNotEmpty()
	declare title: string;

	@ApiProperty({ example: 'I am a content!', description: 'Content of the post' })
	@IsString()
	@IsNotEmpty()
	declare content: string;
}
