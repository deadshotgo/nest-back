import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageProduct } from './entities/image-product.entity';

@Injectable()
export class ImageProductService {
  constructor(
    @InjectRepository(ImageProduct)
    private imageProductRepository: Repository<ImageProduct>,
  ) {}
  create(createImageProductDto) {
    return this.imageProductRepository.insert(createImageProductDto);
  }

  findOne(id: number) {
    return this.imageProductRepository.findOne({ where: { id } });
  }

  update(id: number, updateImageProductDto) {
    return this.imageProductRepository.update(id, updateImageProductDto);
  }

  remove(id: number) {
    return this.imageProductRepository.delete(id);
  }
}
