import { Controller, Body, UploadedFile, UseInterceptors, Put, Delete, Param, Patch, Get, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.model';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Post interactions')
@Controller('post')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@ApiOperation({ summary: 'Post creating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully creating post', type: Post })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() dto: CreatePostDto, @UploadedFile() image?: any) {
		return this.postService.create(dto, image);
	}
	
	@ApiOperation({ summary: 'Post deleting [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully deleting post' })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number) {
		return this.postService.delete(id);
	}
	
	@ApiOperation({ summary: 'Post updating [ADMIN]' })
	@ApiResponse({ status: 200, description: 'Successfully updating post', type: Post })
	@ApiResponse({ status: 404, description: "If post doesn't exists" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	update(@Param('id') id: number, @Body() dto: UpdatePostDto, @UploadedFile() image?: any) {
		return this.postService.update(id, dto, image);
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
