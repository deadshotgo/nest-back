import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}
  create(createTagDto) {
    return this.tagRepository.insert(createTagDto);
  }

  findAll(query) {
    return paginate(query, this.tagRepository, {
      sortableColumns: ['id'],
    });
  }

  findOne(id: number) {
    return this.tagRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

}
