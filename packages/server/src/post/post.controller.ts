import { Controller, Res, Body, UploadedFile, UseInterceptors, Put, Delete, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@ApiTags('Post interactions')
@Controller('post')
export class PostController {
	constructor(private readonly service: PostService) {}

	@ApiOperation({ summary: 'Post creation' })
	@ApiResponse({ status: 200, description: 'Successfully post creation' })
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	async create(@Res() res: Response, @Body() postDto: CreatePostDto, @UploadedFile() image?: any) {
		const data = await this.service.create(postDto, image);
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Post deletion' })
	@ApiResponse({ status: 200, description: 'Successfully post deletion' })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Delete('/:id')
	async delete(@Res() res: Response, @Param('id') id: number) {
		const data = await this.service.delete(id);
		res.status(data.getStatus()).send(data.getResponse());
	}
}
