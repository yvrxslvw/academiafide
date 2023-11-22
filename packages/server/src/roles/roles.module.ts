import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { User } from 'src/users/user.model';
import { UserRoles } from './user-roles.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [RolesController],
	providers: [RolesService],
	imports: [SequelizeModule.forFeature([Role, User, UserRoles]), forwardRef(() => AuthModule)],
	exports: [RolesService],
})
export class RolesModule {}
