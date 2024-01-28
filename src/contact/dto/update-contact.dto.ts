import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import { IsEmpty } from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {
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
