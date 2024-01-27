import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto) {
    return this.categoryRepository.insert(createCategoryDto);
  }

  findAll(query: any) {
    return paginate(query, this.categoryRepository, {
      sortableColumns: ['id'],
    });
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }
}
