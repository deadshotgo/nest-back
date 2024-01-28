import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorProductService {
  create(createColorProductDto) {
    return 'This action adds a new colorProduct';
  }

  findAll() {
    return `This action returns all colorProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colorProduct`;
  }

  update(id: number, updateColorProductDto) {
    return `This action updates a #${id} colorProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} colorProduct`;
  }
}
