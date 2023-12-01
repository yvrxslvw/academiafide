import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserRole } from 'src/roles/entities/user-role.entity';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [
		SequelizeModule.forFeature([User, Post, Role, UserRole]),
		forwardRef(() => AuthModule),
		forwardRef(() => RolesModule),
		FilesModule,
	],
	exports: [UsersService],
})
export class UsersModule {}
