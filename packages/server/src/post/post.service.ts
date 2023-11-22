import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
	constructor(
		@InjectModel(Post) private readonly postRepo: typeof Post,
		private readonly filesService: FilesService,
		private readonly userService: UserService,
	) {}

	async create(postDto: CreatePostDto, image?: any) {
		await this.userService.getOneById(postDto.userId);
		const fileName = image ? await this.filesService.createFile(image) : null;
		const post = await this.postRepo.create({ ...postDto, image: fileName });
		return post;
	}

	async delete(id: number) {
		const post = await this.postRepo.findByPk(id);
		if (!post) throw new NotFoundException('Post not found.');
		const fileName = post.image;
		await post.destroy();
		if (fileName) await this.filesService.deleteFile(fileName);
		return 'Deleted.';
	}

	async update(id: number, postDto: UpdatePostDto, image?: any) {
		const post = await this.postRepo.findByPk(id);
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
		const posts = await this.postRepo.findAll({ include: { all: true, nested: true } });
		return posts;
	}

	async getOneById(id: number) {
		const post = await this.postRepo.findByPk(id, { include: { all: true, nested: true } });
		if (!post) throw new NotFoundException('Post not found.');
		return post;
	}
}
