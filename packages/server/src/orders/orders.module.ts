import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
	controllers: [OrdersController],
	providers: [OrdersService],
	imports: [SequelizeModule.forFeature([Transaction]), ProductsModule],
})
export class OrdersModule {}
