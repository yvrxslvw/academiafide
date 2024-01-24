import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { CartDto } from './dto/Cart.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
	BASE_URL: string = 'https://api-m.sandbox.paypal.com';

	constructor(
		@InjectModel(Transaction) private readonly transactionRepo: typeof Transaction,
		private readonly productService: ProductsService,
	) {}

	async createOrder(cartDto: CartDto) {
		console.log('createOrder():', cartDto);
		const product = await this.productService.getOneById(cartDto.productId);
		const accessToken = await this.generateToken();
		const url = `${this.BASE_URL}/v2/checkout/orders`;
		const payload = {
			intent: 'CAPTURE',
			purchase_units: [
				{
					amount: {
						currency_code: 'EUR',
						value: product.price.toFixed(2),
					},
				},
			],
		};

		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
				// Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
				// https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
				// "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
				// "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
				// "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
			},
			method: 'POST',
			body: JSON.stringify(payload),
		}).then(data => data.json());

		return response;
	}

	async captureOrder(orderId: number) {
		const accessToken = await this.generateToken();
		const url = `${this.BASE_URL}/v2/checkout/orders/${orderId}/capture`;

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
				// Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
				// https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
				// "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
				// "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
				// "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
			},
		}).then(data => data.json());

		return response;
	}

	async generateToken() {
		const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
		const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
		if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) throw new InternalServerErrorException();
		const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_CLIENT_SECRET).toString('base64');
		const response = await fetch(`${this.BASE_URL}/v1/oauth2/token`, {
			method: 'POST',
			body: 'grant_type=client_credentials',
			headers: {
				Authorization: `Basic ${auth}`,
			},
		});

		const data = await response.json();
		return data['access_token'];
	}
}
