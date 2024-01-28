import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../../tag/entities/tag.entity';
import { Blog } from '../../blog/entities/blog.entity';

@Entity({ name: 'tag_blogs' })
export class TagBlog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tag, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  tag: Tag;

  @Column()
  tagId: number;

  @ManyToOne(() => Blog, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'blog_id', referencedColumnName: 'id' }])
  blog: Blog;

  @Column({ name: 'blog_id' })
  blogId: number;
}
