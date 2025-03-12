import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { AppDTO } from 'src/app.controller';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('paymentQueue') private readonly myQueue: Queue) {}

  async addJob(job: AppDTO) {
    await this.myQueue.add('paymentJob', job);
  }
}
