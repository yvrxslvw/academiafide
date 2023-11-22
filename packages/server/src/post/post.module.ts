import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { FilesModule } from 'src/files/files.module';
import { Post } from './post.model';
import { User } from 'src/user/user.model';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [PostController],
	providers: [PostService],
	imports: [
		FilesModule,
		SequelizeModule.forFeature([Post, User]),
		forwardRef(() => UserModule),
		forwardRef(() => AuthModule),
	],
})
export class PostModule {}
