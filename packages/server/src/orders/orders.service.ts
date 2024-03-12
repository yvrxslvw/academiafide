import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { CartDto } from './dto/Cart.dto';
import { ProductsService } from '../products/products.service';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class OrdersService {
	BASE_URL: string = 'https://api-m.sandbox.paypal.com';

	constructor(
		@InjectModel(Transaction) private readonly transactionRepo: typeof Transaction,
		private readonly productService: ProductsService,
		private readonly mailerService: MailerService,
	) {}

	async createOrder(cartDto: CartDto) {
		const product = await this.productService.getOneById(cartDto.id);
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
				// 'PayPal-Mock-Response': '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}', // ! Mocked error
			},
			method: 'POST',
			body: JSON.stringify(payload),
		}).then(data => data.json());

		if (response.status) {
			await this.transactionRepo.create({
				transactionId: response.id,
				productId: cartDto.id,
				email: cartDto.email,
				amount: product.price,
				status: response.status,
			});
		}

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
				// 'PayPal-Mock-Response': '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}', // ! Mocked error
			},
		}).then(data => data.json());

		const transaction = await this.transactionRepo.findOne({ where: { transactionId: orderId } });
		const product = await this.productService.getOne(transaction.productId);
		if (response.status) {
			await transaction.update({ status: response.status });
			if (response.status === 'COMPLETED') {
				const email = transaction.email;
				await this.mailerService.sendMessage(
					email,
					'Comprar productos en el Academia Fide',
					`
						<p>¡Gracias por comprar este producto! Este producto no puede enviarse a terceros ni utilizarse con fines personales. ¡Diviértete aprendiendo con Academia Fide!</p>
						<p>Enlace al producto: ${product.link}</p>
					`,
				);
			}
		} else await transaction.update({ status: 'REJECTED' });

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
		}).then(data => data.json());

		return response['access_token'];
	}
}
