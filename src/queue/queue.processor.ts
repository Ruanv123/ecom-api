/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job, Queue } from 'bullmq';
import { AppDTO, PaymentTest } from 'src/app.controller';
import { Repository } from 'typeorm';

@Injectable()
// @Processor('paymentQueue')
export class QueueProcessor {
  constructor(
    @InjectRepository(PaymentTest)
    private paymentRepository: Repository<PaymentTest>,
    @InjectQueue('paymentQueue') private paymentQueue: Queue,
  ) {}

  // @Process('paymentJob')
  async handleJob(job: Job<AppDTO, any, string>) {
    const paymentData = job.data;
    console.log(`Processing payment for order: ${paymentData.order}`);

    // const payment = this.paymentRepository.create(paymentData);
    // payment.status = 'processing';

    // await this.paymentRepository.save(payment);

    try {
      // payment.status = 'success';

      // await this.paymentRepository.save(payment);

      return { status: 'Payment successful', paymentData };
    } catch (error) {
      console.error('Payment processing failed:', error);
      // Lógica para falha no pagamento
      return { paymentData };
    }
  }

  async processJobManually() {
    // const job = await this.paymentQueue.
    // if (job) {
    //   console.log('Processing job manually:', job.id);
    //   await this.handlePayment(job); // Processar o job manualmente
    //   await job.remove(); // Remove o job da fila depois de processado
    // } else {
    //   console.log('No pending jobs to process.');
    // }
  }
}
