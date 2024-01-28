import { Module } from '@nestjs/common';
import { TagProductService } from './tag-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagProduct } from './entities/tag-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagProduct])],
  providers: [TagProductService],
})
export class TagProductModule {}
