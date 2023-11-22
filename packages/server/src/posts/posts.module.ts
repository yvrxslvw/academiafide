import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { FilesModule } from 'src/files/files.module';
import { Post } from './post.model';
import { User } from 'src/users/user.model';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [PostsController],
	providers: [PostsService],
	imports: [
		FilesModule,
		SequelizeModule.forFeature([Post, User]),
		forwardRef(() => UsersModule),
		forwardRef(() => AuthModule),
	],
})
export class PostsModule {}
