import { Product } from 'src/modules/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.inventory)
  product: Product;

  @Column('int')
  quantity: number; // The quantity added or subtracted

  @Column('timestamp')
  date: Date;

  @Column('varchar', { length: 255 })
  type: string; // 'sale', 'restock', 'return', etc.

  @Column('varchar', { nullable: true })
  note: string; // Optional note for details
}
