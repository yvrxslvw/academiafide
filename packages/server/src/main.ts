import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './App.module';
import { Role } from './roles/role.model';

const bootstrap = async () => {
	const HOST = process.env.API_HOST ?? 'localhost';
	const PORT = Number(process.env.API_PORT) ?? 3001;
	const CLIENT_URL = process.env.CLIENT_URL ?? 'http://localhost:3000';
	const app = await NestFactory.create(AppModule, { cors: { origin: CLIENT_URL } });

	app.setGlobalPrefix('/api');

	const swaggerConfig = new DocumentBuilder()
		.setTitle('Academia Fide backend server')
		.setDescription('This is REST API backend server documentation for Academia Fide.')
		.setVersion('0.0.1')
		.build();
	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('/api/documentation', app, swaggerDocument);

	app.useGlobalPipes(new ValidationPipe());
	await app.listen(PORT, HOST, async () => {
		console.log(`The backend server has been started on ${await app.getUrl()}.`);
		const userRole = await Role.findOne({ where: { tag: 'USER' } });
		const adminRole = await Role.findOne({ where: { tag: 'ADMIN' } });
		if (!userRole) await Role.create({ tag: 'USER', description: 'User' });
		if (!adminRole) await Role.create({ tag: 'ADMIN', description: 'Administrator' });
	});
};
bootstrap();
