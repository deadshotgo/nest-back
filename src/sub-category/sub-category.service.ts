import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/sub-category.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private subCategoryRepository: Repository<SubCategory>,
  ) {}
  create(createSubCategoryDto) {
    return this.subCategoryRepository.insert(createSubCategoryDto);
  }

  findAll(query) {
    return paginate(query, this.subCategoryRepository, {
      sortableColumns: ['id'],
      relations: {
        category: true,
      },
    });
  }

  findOne(id: number) {
    return this.subCategoryRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateSubCategoryDto) {
    return this.subCategoryRepository.update(id, updateSubCategoryDto);
  }
}
