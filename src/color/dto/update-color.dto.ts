import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateColorDto } from './create-color.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateColorDto extends PartialType(CreateColorDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  color: string;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
