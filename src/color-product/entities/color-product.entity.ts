import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Color } from '../../color/entities/color.entity';
import { Product } from '../../product/entities/product.entity';

@Entity({ name: 'color_products' })
export class ColorProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Color, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'color_id', referencedColumnName: 'id' }])
  color: Color;

  @Column()
  colorId: number;

  @ManyToOne(() => Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @Column()
  productId: number;
}
