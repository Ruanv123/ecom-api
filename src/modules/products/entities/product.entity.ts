import { Category } from 'src/modules/categories/entities/category.entity';
import { Inventory } from 'src/modules/inventory/entities/inventory.entity';
import { OrderItem } from 'src/modules/orders/entities/order-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('int')
  stock: number;

  @Column('text', { array: true, nullable: true })
  images: string[];

  @Column('int', { default: 10 })
  lowStockThreshold: number; // Threshold for low stock alert

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventory: Inventory[];

  isLowStock(): boolean {
    return this.stock <= this.lowStockThreshold;
  }
}
