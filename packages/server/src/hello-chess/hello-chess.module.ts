import { Module } from '@nestjs/common';
import { HelloChessController } from './hello-chess.controller';
import { HelloChessService } from './hello-chess.service';

@Module({
  controllers: [HelloChessController],
  providers: [HelloChessService]
})
export class HelloChessModule {}
