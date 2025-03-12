import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('myQueue') private readonly myQueue: Queue) {}

  async addJob() {
    await this.myQueue.add('myJob', {
      data: 'Exemplo de dados',
    });
  }
}
