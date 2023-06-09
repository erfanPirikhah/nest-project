import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import UserEntity from 'src/users/entities/user.entity';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }


  @Post('login')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' , type : UserEntity})
  @ApiResponse({ status: 400, description: 'Something is Wrong , Please try Agin .'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
