import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QueueService } from './queue/queue.service';
import { QueueProcessor } from './queue/queue.processor';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly queueService: QueueService,
    private readonly queueProcessor: QueueProcessor,
  ) {}

  @Get()
  async getHello() {
    for (let i = 0; i < 10000; i++) {
      await this.queueService.addJob();
    }

    return 'sucesso';
  }

  @Get('processa-pedidos')
  async processaPedidos() {
    await this.queueProcessor.handleJob({});
  }
}
