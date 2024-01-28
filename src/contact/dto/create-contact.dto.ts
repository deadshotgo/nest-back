import { IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  @IsEmpty()
  path?: string;

  @ApiProperty()
  @IsEmpty()
  address?: string;

  @ApiProperty()
  @IsEmpty()
  gmail?: string;

  @ApiProperty()
  @IsEmpty()
  phoneNumber?: string;

  @ApiProperty()
  @IsEmpty()
  footerText?: string;
}
