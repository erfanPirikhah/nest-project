import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsString,IsEmail,IsStrongPassword } from "class-validator";

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
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
