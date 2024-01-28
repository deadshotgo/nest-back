import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Entity({ name: 'tag_products' })
export class TagProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tag, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  tag: Tag;

  @Column()
  tagId: number;

  @ManyToOne(() => Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @Column()
  productId: number;
}
