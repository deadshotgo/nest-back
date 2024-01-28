import { Module } from '@nestjs/common';
import { ImageProductService } from './image-product.service';
import { ImageProductController } from './image-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageProduct } from './entities/image-product.entity';

@Module({
  controllers: [ImageProductController],
  imports: [TypeOrmModule.forFeature([ImageProduct])],
  providers: [ImageProductService],
})
export class ImageProductModule {}
