import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './entities/sub-category.entity';

@Module({
  controllers: [SubCategoryController],
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoryService],
})
export class SubCategoryModule {}
