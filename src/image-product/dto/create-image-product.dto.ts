import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImageProductDto {
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
