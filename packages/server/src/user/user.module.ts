import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [forwardRef(() => AuthModule), forwardRef(() => UsersModule)],
})
export class UserModule {}
