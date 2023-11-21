import { Controller, Res, Body, UploadedFile, UseInterceptors, Put, Delete, Param, Patch, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.model';

@ApiTags('Post interactions')
@Controller('post')
export class PostController {
	constructor(private readonly service: PostService) {}

	@ApiOperation({ summary: 'Post creating' })
	@ApiResponse({ status: 200, description: 'Successfully creating post', type: Post })
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	async create(@Res() res: Response, @Body() postDto: CreatePostDto, @UploadedFile() image?: any) {
		const data = await this.service.create(postDto, image);
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Post deleting' })
	@ApiResponse({ status: 200, description: 'Successfully deleting post' })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Delete('/:id')
	async delete(@Res() res: Response, @Param('id') id: number) {
		const data = await this.service.delete(id);
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Post updating' })
	@ApiResponse({ status: 200, description: 'Successfully updating post', type: Post })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	async update(
		@Res() res: Response,
		@Param('id') id: number,
		@Body() postDto: UpdatePostDto,
		@UploadedFile() image?: any,
	) {
		const data = await this.service.update(id, postDto, image);
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Getting all posts' })
	@ApiResponse({ status: 200, description: 'Successfully getting all post', type: [Post] })
	@Get()
	async getAll(@Res() res: Response) {
		const data = await this.service.getAll();
		res.status(data.getStatus()).send(data.getResponse());
	}

	@ApiOperation({ summary: 'Getting one post by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting one post by ID', type: Post })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Get('/:id')
	async getOneById(@Res() res: Response, @Param('id') id: number) {
		const data = await this.service.getOneById(id);
		res.status(data.getStatus()).send(data.getResponse());
	}
}
