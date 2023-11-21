import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

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

	async delete(id: number) {
		try {
			const post = await this.repo.findByPk(id);
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

	async update(id: number, postDto: UpdatePostDto, image?: any) {
		try {
			const post = await this.repo.findByPk(id);
			if (!post) return new HttpException('Post not found.', HttpStatus.NOT_FOUND);
			if (image) {
				const fileName = await this.filesService.createFile(image);
				if (post.image) await this.filesService.deleteFile(post.image);
				await post.update({ image: fileName });
			}
			await post.update({ ...postDto });
			return new HttpException(post, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async getAll() {
		try {
			const posts = await this.repo.findAll({ include: { all: true, nested: true } });
			return new HttpException(posts, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async getOneById(id: number) {
		try {
			const post = await this.repo.findByPk(id, { include: { all: true, nested: true } });
			if (!post) return new HttpException('Post not found.', HttpStatus.NOT_FOUND);
			return new HttpException(post, HttpStatus.OK);
		} catch (error) {
			console.error(error);
			return new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
