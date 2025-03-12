import { Body, Controller, Get, Post } from '@nestjs/common';
import { Column, Entity } from 'typeorm';
import { QueueService } from './queue/queue.service';

@Entity()
export class PaymentTest {
  @Column()
  order: number;

  @Column()
  method: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('varchar', { length: 50 })
  status: string; // 'completed', 'failed', etc.
}

export class AppDTO {
  order: number;
  method: string;
  amount: number;
  status: string;
}

@Controller()
export class AppController {
  constructor(private readonly queueService: QueueService) {}

  @Post('process')
  async createPayment(@Body() body: AppDTO) {
    await this.queueService.addJob(body);

    return { message: 'Payment is being processed in the background.' };
  }

  @Get('process-all')
  ProcessAll() {
    // const pendingPayments = await this.paymentRepository.find({
    //   where: { status: 'pending' },
    // });

    // for (const payment of pendingPayments) {
    //   await this.paymentQueue.add('paymentJob', payment);
    // }

    return {
      message: `${10} payments are being processed in the background.`,
    };
  }
}
