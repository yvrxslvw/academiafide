import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './App.module';
import { Role } from './roles/role.model';

const isDev = process.env.APP_MODE === 'development';

const bootstrap = async () => {
	const HOST = process.env.API_HOST ?? 'localhost';
	const PORT = Number(process.env.API_PORT) ?? 3001;
	const CLIENT_URL = process.env.CLIENT_URL ?? 'http://localhost:3000';
	const app = await NestFactory.create(AppModule, { cors: { origin: CLIENT_URL } });
	app.setGlobalPrefix('/api');
	app.useGlobalPipes(new ValidationPipe());

	if (isDev) {
		const swaggerConfig = new DocumentBuilder()
			.setTitle('Academia Fide backend server')
			.setDescription('This is REST API backend server documentation for Academia Fide.')
			.setVersion('0.0.1')
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
