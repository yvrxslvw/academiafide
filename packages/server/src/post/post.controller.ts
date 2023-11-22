import { Controller, Body, UploadedFile, UseInterceptors, Put, Delete, Param, Patch, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.model';

@ApiTags('Post interactions')
@Controller('post')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@ApiOperation({ summary: 'Post creating' })
	@ApiResponse({ status: 200, description: 'Successfully creating post', type: Post })
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() postDto: CreatePostDto, @UploadedFile() image?: any) {
		return this.postService.create(postDto, image);
	}

	@ApiOperation({ summary: 'Post deleting' })
	@ApiResponse({ status: 200, description: 'Successfully deleting post' })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.postService.delete(id);
	}

	@ApiOperation({ summary: 'Post updating' })
	@ApiResponse({ status: 200, description: 'Successfully updating post', type: Post })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	update(@Param('id') id: number, @Body() postDto: UpdatePostDto, @UploadedFile() image?: any) {
		return this.postService.update(id, postDto, image);
	}

	@ApiOperation({ summary: 'Getting all posts' })
	@ApiResponse({ status: 200, description: 'Successfully getting all post', type: [Post] })
	@Get()
	getAll() {
		return this.postService.getAll();
	}

	@ApiOperation({ summary: 'Getting one post by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting one post by ID', type: Post })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Get('/:id')
	getOneById(@Param('id') id: number) {
		return this.postService.getOneById(id);
	}
}
