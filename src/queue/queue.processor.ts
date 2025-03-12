/* eslint-disable @typescript-eslint/require-await */
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bullmq';

@Processor('myQueue')
export class QueueProcessor {
  constructor() {}

  @Process('myJob')
  async handleJob(job: Job) {
    console.log('Processando job', job.id);
    console.log('Dados do job:', job.data);
  }
}
