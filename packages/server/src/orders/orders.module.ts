import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { ProductsModule } from 'src/products/products.module';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
	controllers: [OrdersController],
	providers: [OrdersService],
	imports: [SequelizeModule.forFeature([Transaction]), ProductsModule, MailerModule],
})
export class OrdersModule {}
