import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

const bootstrap = async () => {
	const HOST = process.env.API_HOST ?? 'localhost';
	const PORT = Number(process.env.API_PORT) ?? 3001;
	const CLIENT_URL = process.env.CLIENT_URL ?? 'http://localhost:3000';
	const app = await NestFactory.create(AppModule, { cors: { origin: CLIENT_URL } });

	await app.listen(PORT, HOST, () => console.log(`The backend server has been started on http://${HOST}:${PORT}.`));
};
bootstrap();
