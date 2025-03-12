import { Order } from 'src/modules/orders/entities/order.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.payments)
  order: Order;

  @Column()
  method: string; // 'credit_card', 'paypal', etc.

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('varchar', { length: 50 })
  status: string; // 'completed', 'failed', etc.

  @Column('timestamp')
  paymentDate: Date;
}
