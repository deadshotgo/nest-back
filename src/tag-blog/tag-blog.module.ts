import { Module } from '@nestjs/common';
import { TagBlogService } from './tag-blog.service';

@Module({
  providers: [TagBlogService],
})
export class TagBlogModule {}
