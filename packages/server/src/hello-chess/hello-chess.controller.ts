import { Controller, Get } from '@nestjs/common';
import { HelloChessService } from './hello-chess.service';

@Controller('hello')
export class HelloChessController {
	constructor(private readonly service: HelloChessService) {}

	@Get()
	getHello() {
		return this.service.getHello();
	}
}
