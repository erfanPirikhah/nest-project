import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class RegisterAuthDto {
  @IsNotEmpty()
  @IsString({message:'پارامتر باید از نوع رشته باشد '})
  @ApiProperty({type:String , default:"Erfan"})
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({type:String , default:"Pirikhah"})
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({type:String , default:"erfan@gmail.com"})
  email: string;

  @IsStrongPassword()
  @ApiProperty({type:String , default:"123456789"})
  password: string;

  @ApiProperty({type:String , default:"i'm Erfan Pirikhah ."})
  bio:string;

  @ApiProperty({type:String , default:""})
  image:string
}
