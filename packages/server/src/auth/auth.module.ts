import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	controllers: [AuthController],
	providers: [AuthService],
	exports: [AuthService, JwtModule],
	imports: [
		JwtModule.register({
			global: true,
			secret: process.env.API_SECRET_KEY,
			signOptions: { expiresIn: '24h' },
		}),
	],
})
export class AuthModule {}
