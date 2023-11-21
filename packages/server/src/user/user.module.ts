import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.model';
import { Post } from 'src/post/post.model';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [SequelizeModule.forFeature([User, Post])],
})
export class UserModule {}
