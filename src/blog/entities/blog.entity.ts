import {
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tag } from '../../tag/entities/tag.entity';

@Entity({ name: 'blog' })
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'preview_text' })
  previewText: string;

  @Column()
  text: string;

  @Column()
  title: string;

  @Column()
  img: string;

  @Column()
  preview: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @ManyToMany(() => Tag, (tag) => tag.blogs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'tag_blogs',
    joinColumn: {
      name: 'blog_id',
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
