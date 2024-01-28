import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}
  create(createBlogDto) {
    return this.blogRepository.insert(createBlogDto);
  }

  findAll(query) {
    return paginate(query, this.blogRepository, {
      sortableColumns: ['id'],
      relations: {
        tags: true,
      },
    });
  }

  findOne(id: number) {
    return this.blogRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateBlogDto) {
    return this.blogRepository.update(id, updateBlogDto);
  }
}
