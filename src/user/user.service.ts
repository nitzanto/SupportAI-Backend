import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  private testUser = {
    ID: randomUUID(),
    username: 'test',
    password: 'test',
  };
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getUserByUsername(username: string) {
    return this.testUser;
  }
}
