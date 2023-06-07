import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import User from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private user_repository: Repository<User>,
  ) {}


  async createUser(createUser: CreateUserDto) {
    const user = await this.user_repository.create(createUser);
    this.user_repository.save(user);
    return user;
  }
  
  async findAll() {
    return await this.user_repository.find();
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

 
  async findOneByEmail(email: string) {
    return await this.user_repository.findOne({
      where: { email: email },
    });
  }
}
