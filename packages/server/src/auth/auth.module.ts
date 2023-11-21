import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { ConfigService } from '@nestjs/config';

@Module({
	controllers: [AuthController],
	providers: [AuthService],
	exports: [AuthService, JwtModule],
	imports: [
		JwtModule.registerAsync({
			inject: [ConfigService],
			useFactory: (config: ConfigService) => ({
				global: true,
				secret: config.get<string>('API_SECRET_KEY'),
				signOptions: { expiresIn: '24h' },
			}),
		}),
		forwardRef(() => UserModule),
	],
})
export class AuthModule {}
