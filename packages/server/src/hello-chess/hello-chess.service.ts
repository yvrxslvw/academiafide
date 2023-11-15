import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloChessService {
	getHello() {
		return { message: 'Hello chess!' };
	}
}
