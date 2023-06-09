import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.Strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret:'secret',
    signOptions:{expiresIn:'1d'}
  })
],
  controllers: [AuthController],
  providers: [AuthService, UsersService,JwtStrategy ],
})
export class AuthModule {}
