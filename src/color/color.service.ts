import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entities/color.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
  ) {}
  create(createColorDto) {
    return this.colorRepository.insert(createColorDto);
  }

  findAll(query) {
    return paginate(query, this.colorRepository, {
      sortableColumns: ['id'],
    });
  }

  findOne(id: number) {
    return this.colorRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateColorDto) {
    return this.colorRepository.update(id, updateColorDto);
  }
}
