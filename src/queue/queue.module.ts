import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { QueueProcessor } from './queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'myQueue',
    }),
    BullBoardModule.forFeature({
      name: 'myQueue',
      adapter: BullAdapter, //or use BullAdapter if you're using bull instead of bullMQ
    }),
  ],

  providers: [QueueService, QueueProcessor],
  exports: [QueueService, QueueProcessor],
})
export class QueueModule {}
