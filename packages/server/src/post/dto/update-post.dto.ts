import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
	@ApiProperty({ example: 'I am a new title!', description: 'New post title', required: false })
	declare title?: string;

	@ApiProperty({ example: 'I am a new content!', description: 'New post content', required: false })
	declare content?: string;
}
