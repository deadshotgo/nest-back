import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  previewText: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  img: string;

  @IsString()
  @ApiProperty()
  preview: boolean;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
