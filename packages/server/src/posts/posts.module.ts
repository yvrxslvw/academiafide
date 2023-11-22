import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { FilesModule } from 'src/files/files.module';
import { Post } from './post.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [PostsController],
	providers: [PostsService],
	imports: [FilesModule, SequelizeModule.forFeature([Post]), forwardRef(() => AuthModule)],
})
export class PostsModule {}
