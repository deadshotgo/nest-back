import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  information?: string;

  @IsNumber()
  @ApiProperty()
  qty: string;

  @IsNumber()
  @ApiProperty()
  price: string;

  @IsBoolean()
  @ApiProperty()
  feature: string;

  @IsNumber()
  @ApiProperty()
  categoryId: number;

  @IsNumber()
  @ApiProperty()
  subCategoryId: number;

  @IsNumber()
  @ApiProperty()
  brandId: number;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
