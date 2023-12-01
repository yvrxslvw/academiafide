import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './entities/post.entity';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
	constructor(@InjectModel(Post) private readonly postRepo: typeof Post, private readonly filesService: FilesService) {}

	async create(dto: CreatePostDto, image?: any): Promise<Post> {
		const fileName = image ? await this.filesService.createFile(image) : null;
		const post = await this.postRepo.create({ ...dto, image: fileName });
		return post;
	}

	async getAll(): Promise<Post[]> {
		const posts = await this.postRepo.findAll({ include: { all: true } });
		return posts;
	}

	async getOneById(id: number): Promise<Post> {
		const post = await this.postRepo.findByPk(id, { include: { all: true } });
		if (!post) throw new NotFoundException("Post doesn't exist.");
		return post;
	}

	async update(id: number, dto: UpdatePostDto, image?: any): Promise<Post> {
		const post = await this.postRepo.findByPk(id);
		if (!post) throw new NotFoundException("Post doesn't exist.");
		if (image) {
			const fileName = await this.filesService.createFile(image);
			if (post.image) await this.filesService.deleteFile(post.image);
			await post.update({ image: fileName });
		}
		await post.update({ ...dto });
		return post;
	}

	async delete(id: number): Promise<{ message: string }> {
		const post = await this.postRepo.findByPk(id);
		if (!post) throw new NotFoundException("Post doesn't exist.");
		const fileName = post.image;
		await post.destroy();
		if (fileName) await this.filesService.deleteFile(fileName);
		return { message: 'Deleted.' };
	}
}
