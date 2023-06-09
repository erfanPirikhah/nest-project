import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginAuthDto {
  

  @IsEmail()
  @ApiProperty({type:String , default:"erfan@gmail.com"})
  email: string;

  
  @IsNotEmpty()
  @IsString()
  @ApiProperty({type:String , default:"123456789"})
  password: string;
}
