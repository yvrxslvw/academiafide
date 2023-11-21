import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { FilesModule } from 'src/files/files.module';
import { Post } from './post.model';
import { User } from 'src/user/user.model';

@Module({
	controllers: [PostController],
	providers: [PostService],
	imports: [FilesModule, SequelizeModule.forFeature([Post, User])],
})
export class PostModule {}
