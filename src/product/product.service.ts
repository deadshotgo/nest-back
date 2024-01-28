import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(createProductDto) {
    return this.productRepository.insert(createProductDto);
  }

  findAll(query) {
    return paginate(query, this.productRepository, {
      sortableColumns: ['id'],
      relations: {
        subCategory: true,
        category: true,
        brand: true,
        images: true,
        colors: true,
        tags: true,
      },
    });
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: { id },
      relations: {
        subCategory: true,
        category: true,
        brand: true,
      },
    });
  }

  update(id: number, updateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }
}
