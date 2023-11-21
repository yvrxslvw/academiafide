import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloChessModule } from './hello-chess/hello-chess.module';

const envFilePath = process.env.APP_MODE === 'development' ? '.env.development' : '.env';

@Module({
	imports: [HelloChessModule, ConfigModule.forRoot({ envFilePath })],
})
export class AppModule {}
