import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import UserEntity from './entities/user.entity';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';

@ApiTags('Users')
@ApiBearerAuth('defaultBearerAuth')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' , type : UserEntity})
  @ApiResponse({ status: 400, description: 'Something is Wrong , Please try Agin .'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: 'Get All Users' , type : [UserEntity]})
  @ApiResponse({ status: 400, description: 'Something is Wrong , Please try Agin .'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
