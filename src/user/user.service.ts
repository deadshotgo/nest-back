import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(query) {
    return paginate(query, this.userRepository, {
      sortableColumns: ['id'],
    });
  }

  async findOne(id) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async create(data) {
    const userdb = await this.userRepository.findOne({
      where: { email: data.email },
    });
    if (userdb)
      throw new BadRequestException('Користувач з таким email вже існує');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.userRepository.insert({
      ...data,
      password: hashedPassword,
      email: data.email.toLowerCase,
    });
  }

  async update(userId, data) {
    return this.userRepository.update(userId, data);
  }

  async findOneByEmail(email) {
    return this.userRepository.findOne({
      where: { email },
    });
  }
}
