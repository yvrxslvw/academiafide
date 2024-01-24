import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { FilesModule } from './files/files.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/entities/post.entity';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { UserRole } from './roles/entities/user-role.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { MailerModule } from './mailer/mailer.module';
import { Transaction } from './products/entities/transaction.entity';

const isDev = process.env.APP_MODE === 'development';
const envFilePath = isDev ? '.env.development' : path.resolve(__dirname, '.env');

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath }),
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: process.env.MYSQL_HOST,
			port: 3306,
			username: process.env.MYSQL_USERNAME,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE,
			timezone: process.env.MYSQL_TIMEZONE,
			logging: isDev ? sql => console.log(sql) : false,
			models: [User, Post, Role, UserRole, Product, Transaction],
			autoLoadModels: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
			exclude: ['/api/(.*)'],
			serveRoot: '/',
		}),
		UsersModule,
		FilesModule,
		PostsModule,
		AuthModule,
		RolesModule,
		ProductsModule,
		MailerModule,
	],
})
export class AppModule {}
