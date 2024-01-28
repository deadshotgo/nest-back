import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Module({
  controllers: [ContactController],
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactService],
})
export class ContactModule {}
