import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateImageProductDto } from './create-image-product.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateImageProductDto extends PartialType(CreateImageProductDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  path: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  main: boolean;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  productId: boolean;
}
