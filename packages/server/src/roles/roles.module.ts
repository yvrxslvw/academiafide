import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { UserRole } from './entities/user-role.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	controllers: [RolesController],
	providers: [RolesService],
	imports: [SequelizeModule.forFeature([Role, User, UserRole]), forwardRef(() => AuthModule)],
	exports: [RolesService],
})
export class RolesModule {}
