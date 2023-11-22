import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
	@ApiProperty({ example: 'I am a title!', description: 'Title of the post' })
	@IsString()
	@IsNotEmpty()
	declare title: string;

	@ApiProperty({ example: 'I am a content!', description: 'Content of the post' })
	@IsString()
	@IsNotEmpty()
	declare content: string;
}
