import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.model';
import { Post } from 'src/posts/post.model';
import { Role } from 'src/roles/role.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [
		SequelizeModule.forFeature([User, Post, Role, UserRoles]),
		forwardRef(() => AuthModule),
		forwardRef(() => RolesModule),
	],
	exports: [UsersService],
})
export class UsersModule {}
