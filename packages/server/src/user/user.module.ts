import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.model';
import { Post } from 'src/post/post.model';
import { Role } from 'src/role/role.model';
import { UserRoles } from 'src/role/user-roles.model';
import { RoleModule } from 'src/role/role.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [SequelizeModule.forFeature([User, Post, Role, UserRoles]), forwardRef(() => AuthModule)],
	exports: [UserService],
})
export class UserModule {}
