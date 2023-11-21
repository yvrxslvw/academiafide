import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
	constructor(@InjectModel(Post) private readonly repo: typeof Post, private readonly filesService: FilesService) {}

	async create(postDto: CreatePostDto, image?: any) {
		const fileName = image ? await this.filesService.createFile(image) : null;
		const post = await this.repo.create({ ...postDto, image: fileName });
		return post;
	}

	async delete(id: number) {
		const post = await this.repo.findByPk(id);
		if (!post) throw new NotFoundException('Post not found.');
		const fileName = post.image;
		await post.destroy();
		if (fileName) await this.filesService.deleteFile(fileName);
		return 'Deleted.';
	}

	async update(id: number, postDto: UpdatePostDto, image?: any) {
		const post = await this.repo.findByPk(id);
		if (!post) throw new NotFoundException('Post not found.');
		if (image) {
			const fileName = await this.filesService.createFile(image);
			if (post.image) await this.filesService.deleteFile(post.image);
			await post.update({ image: fileName });
		}
		await post.update({ ...postDto });
		return post;
	}

	async getAll() {
		const posts = await this.repo.findAll({ include: { all: true, nested: true } });
		return posts;
	}

	async getOneById(id: number) {
		const post = await this.repo.findByPk(id, { include: { all: true, nested: true } });
		if (!post) throw new NotFoundException('Post not found.');
		return post;
	}
}
