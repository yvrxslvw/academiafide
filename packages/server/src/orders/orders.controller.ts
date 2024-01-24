import { Body, Controller, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartDto } from './dto/Cart.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@ApiOperation({ summary: 'Creating an order' })
	@Post('/create')
	createOrder(@Body() cartDto: CartDto) {
		return this.ordersService.createOrder(cartDto);
	}

	@ApiOperation({ summary: 'Capturing an order' })
	@Post('/capture/:id')
	captureOrder(@Param('id') orderId: number) {
		return this.ordersService.captureOrder(orderId);
	}
}
