import { Module } from '@nestjs/common';
import { ColorProductService } from './color-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorProduct } from './entities/color-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColorProduct])],
  providers: [ColorProductService],
})
export class ColorProductModule {}
