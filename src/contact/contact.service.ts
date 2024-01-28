import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { paginate } from 'nestjs-paginate';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto) {
    return this.contactRepository.insert(createContactDto);
  }

  findAll(query) {
    return paginate(query, this.contactRepository, {
      sortableColumns: ['id'],
    });
  }

  findOne(id: number) {
    return this.contactRepository.findOne({ where: { id } });
  }

  update(id: number, updateContactDto) {
    return this.contactRepository.update(id, updateContactDto);
  }

}
