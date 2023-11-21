import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';

@Injectable()
export class PostService {
	constructor(@InjectModel(Post) private readonly repo: typeof Post, private readonly filesService: FilesService) {}

	async create(postDto: CreatePostDto, image?: any) {
		try {
			const fileName = image ? await this.filesService.createFile(image) : null;
			const post = await this.repo.create({ ...postDto, image: fileName });
			return new HttpException(post, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async delete(postDto: DeletePostDto) {
		try {
			const post = await this.repo.findByPk(postDto.id);
			if (!post) return new HttpException('Post not found.', HttpStatus.NOT_FOUND);
			const fileName = post.image;
			await post.destroy();
			if (fileName) await this.filesService.deleteFile(fileName);
			return new HttpException('Deleted.', HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
