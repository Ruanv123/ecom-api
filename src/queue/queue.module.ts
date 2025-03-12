import { BullAdapter } from '@bull-board/api/bullAdapter';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueProcessor } from './queue.processor';
import { QueueService } from './queue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTest } from 'src/app.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'paymentQueue',
    }),
    BullBoardModule.forFeature({
      name: 'paymentQueue',
      adapter: BullAdapter, //or use BullAdapter if you're using bull instead of bullMQ
    }),
    TypeOrmModule.forFeature([PaymentTest]),
  ],

  providers: [QueueService, QueueProcessor],
  exports: [QueueService, QueueProcessor],
})
export class QueueModule {}
