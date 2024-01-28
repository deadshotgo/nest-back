import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
})
export class ProductModule {}
