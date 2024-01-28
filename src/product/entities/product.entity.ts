import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, JoinTable, ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { SubCategory } from '../../sub-category/entities/sub-category.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { ImageProduct } from '../../image-product/entities/image-product.entity';
import { Color } from '../../color/entities/color.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  information: string;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  likes: number;

  @Column()
  article: string;

  @Column()
  feature: boolean;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
  category: Category;

  @Column({ name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.products)
  @JoinColumn([{ name: 'sub_category_id', referencedColumnName: 'id' }])
  subCategory: SubCategory;

  @Column({ name: 'sub_category_id' })
  subCategoryId: number;

  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn([{ name: 'brand_id', referencedColumnName: 'id' }])
  brand: Brand;

  @Column({ name: 'brand_id' })
  brandId: number;

  @OneToMany(() => ImageProduct, (image) => image.product)
  images: ImageProduct[];

  @ManyToMany(() => Color, (color) => color.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'color_products',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'color_id',
      referencedColumnName: 'id',
    },
  })
  colors?: Color[];

  @ManyToMany(() => Tag, (tag) => tag.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'tag_products',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags?: Tag[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'createdat',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updatedat',
  })
  public updatedAt: Date;
}
