import { Module, forwardRef } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { User } from 'src/user/user.model';
import { UserRoles } from './user-roles.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [RoleController],
	providers: [RoleService],
	imports: [SequelizeModule.forFeature([Role, User, UserRoles]), forwardRef(() => AuthModule)],
})
export class RoleModule {}
