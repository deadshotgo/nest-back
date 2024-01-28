import { Injectable } from '@nestjs/common';

@Injectable()
export class TagProductService {
  create(createTagProductDto) {
    return 'This action adds a new tagProduct';
  }

  findAll() {
    return `This action returns all tagProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagProduct`;
  }

  update(id: number, updateTagProductDto) {
    return `This action updates a #${id} tagProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagProduct`;
  }
}
