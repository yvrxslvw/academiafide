import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from 'src/mailer/mailer.module';

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
		forwardRef(() => UsersModule),
		forwardRef(() => MailerModule),
	],
})
export class AuthModule {}
