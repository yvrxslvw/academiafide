import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloChessModule } from './hello-chess/hello-chess.module';

@Module({
	imports: [HelloChessModule, ConfigModule.forRoot({ envFilePath: `.env.${process.env.APP_MODE}` })],
})
export class AppModule {}
