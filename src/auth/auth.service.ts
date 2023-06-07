import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import User from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';
import {JwtService} from '@nestjs/jwt'


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userService: UsersService,
    // private readonly jwtService : JwtService
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const user = await this.userService.findOneByEmail(registerAuthDto.email);
    if (user) throw new HttpException('this user already exist', 400);
    registerAuthDto.password = bcrypt.hash(registerAuthDto.password, 10);
    return await this.userService.createUser(registerAuthDto);
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.userService.findOneByEmail(loginAuthDto.email)

    if(!user) throw new HttpException("The user wasn't found",400);

    // const accessToken = this.jwtService.sign({
    //   sub : user.id,
    //   email: user.email
    // })

    // return accessToken
  }
}
