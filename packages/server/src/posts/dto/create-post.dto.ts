import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePostDto {
	@ApiProperty({ example: 'I am a title!', description: 'Post title' })
	@IsString()
	@Length(3, 255)
	declare title: string;

	@ApiProperty({ example: 'I am a content!', description: 'Post content' })
	@IsString()
	@Length(3, 4096)
	declare content: string;
}
