import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';

@Module({
	controllers: [ProductsController],
	providers: [ProductsService],
	imports: [SequelizeModule.forFeature([Product]), forwardRef(() => AuthModule), FilesModule],
})
export class ProductsModule {}
