import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePostDto {
	@ApiProperty({ example: 'I am a title!', description: 'Title of the post' })
	@IsString()
	@Length(3, 255)
	declare title: string;

	@ApiProperty({ example: 'I am a content!', description: 'Content of the post' })
	@IsString()
	@Length(3, 65535)
	declare content: string;
}
