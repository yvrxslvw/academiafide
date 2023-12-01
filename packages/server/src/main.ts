import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './App.module';
import { Role } from './roles/entities/role.entity';

const isDev = process.env.APP_MODE === 'development';
const HOST = process.env.API_HOST;
const PORT = Number(process.env.API_PORT);
const CLIENT_URL = process.env.CLIENT_URL;

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule, { cors: { origin: CLIENT_URL, credentials: true } });

	app.setGlobalPrefix('/api');
	app.useGlobalPipes(new ValidationPipe());
	app.use(cookieParser());

	if (isDev) {
		const swaggerConfig = new DocumentBuilder()
			.setTitle('Academia Fide backend server')
			.setDescription(
				'This is REST API backend server for Academia Fide. ' +
					'Below are some resources and interactions with them. ' +
					'Some resources require an access token, which is taken after user authorization; also, some interactions require the Administrator role. ' +
					'A refresh token is required for a refresh resource; it is also taken after user authorization.',
			)
			.setVersion('1.0.0')
			.setContact('yvrxslvw', 'https://github.com/yvrxslvw', 'yvrxslvv@gmail.com')
			.addBearerAuth({ type: 'http' }, 'accessToken')
			.addCookieAuth('refreshToken')
			.build();
		const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
		SwaggerModule.setup('/api/documentation', app, swaggerDocument);
	}

	await app.listen(PORT, HOST, async () => {
		if (!(await Role.findOne({ where: { tag: 'USER' } }))) {
			await Role.create({ tag: 'USER', description: 'User' });
		}
		if (!(await Role.findOne({ where: { tag: 'ADMIN' } }))) {
			await Role.create({ tag: 'ADMIN', description: 'Administrator' });
		}
	});
};
bootstrap();
