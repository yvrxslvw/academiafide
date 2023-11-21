import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { FilesModule } from './files/files.module';
import { PostModule } from './post/post.module';
import { Post } from './post/post.model';

const isDev = process.env.APP_MODE === 'development';
const envFilePath = isDev ? '.env.development' : '.env';

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath }),
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: process.env.MYSQL_HOST,
			port: 3306,
			username: process.env.MYSQL_USERNAME,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
			timezone: process.env.MYSQL_TIMEZONE,
			logging: isDev ? sql => console.log(sql) : false,
			models: [User, Post],
			autoLoadModels: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
			exclude: ['/api/(.*)'],
			serveRoot: '/',
		}),
		UserModule,
		FilesModule,
		PostModule,
	],
})
export class AppModule {}
