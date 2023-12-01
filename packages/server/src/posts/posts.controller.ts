import {
	Controller,
	Body,
	UploadedFile,
	UseInterceptors,
	Put,
	Delete,
	Param,
	Patch,
	Get,
	UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Post interactions')
@Controller('posts')
export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Creating a post' })
	@ApiResponse({ status: 200, description: 'Successful post creation', type: Post })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Put()
	@UseInterceptors(FileInterceptor('image'))
	create(@Body() dto: CreatePostDto, @UploadedFile() image?: any): Promise<Post> {
		return this.postsService.create(dto, image);
	}

	@ApiOperation({ summary: 'Getting all posts' })
	@ApiResponse({ status: 200, description: 'Successfully getting all posts', type: [Post] })
	@Get()
	getAll(): Promise<Post[]> {
		return this.postsService.getAll();
	}

	@ApiOperation({ summary: 'Getting a post by ID' })
	@ApiResponse({ status: 200, description: 'Successfully getting a post', type: Post })
	@ApiResponse({ status: 404, description: "Post doesn't exist" })
	@Get('/:id')
	getOneById(@Param('id') id: number): Promise<Post> {
		return this.postsService.getOneById(id);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Updating a post' })
	@ApiResponse({ status: 200, description: 'Successful post updation', type: Post })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Post doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Patch('/:id')
	@UseInterceptors(FileInterceptor('image'))
	update(@Param('id') id: number, @Body() dto: UpdatePostDto, @UploadedFile() image?: any): Promise<Post> {
		return this.postsService.update(id, dto, image);
	}

	@ApiBearerAuth('accessToken')
	@ApiOperation({ summary: 'Deleting a post' })
	@ApiResponse({ status: 200, description: 'Successful post deletion' })
	@ApiResponse({ status: 401, description: "You don't have ADMIN role" })
	@ApiResponse({ status: 404, description: "Post doesn't exist" })
	@Roles('ADMIN')
	@UseGuards(RolesGuard)
	@Delete('/:id')
	delete(@Param('id') id: number): Promise<{ message: string }> {
		return this.postsService.delete(id);
	}
}
