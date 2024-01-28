import { Injectable } from '@nestjs/common';
import { paginate } from 'nestjs-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}
  create(createBrandDto) {
    return this.brandRepository.insert(createBrandDto);
  }

  findAll(query) {
    return paginate(query, this.brandRepository, {
      sortableColumns: ['id'],
    });
  }

  findOne(id: number) {
    return this.brandRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateBrandDto) {
    return this.brandRepository.update(id, updateBrandDto);
  }
}
