import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { FilesModule } from './files/files.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/post.model';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/role.model';
import { UserRoles } from './roles/user-roles.model';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.model';

const isDev = process.env.APP_MODE === 'development';
const envFilePath = isDev ? '.env.development' : '.env';

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
			models: [User, Post, Role, UserRoles, Product],
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
	],
})
export class AppModule {}
