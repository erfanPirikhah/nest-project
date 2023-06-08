import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({type:String , default:"Erfan"})
  firstName: string;

  @ApiProperty({type:String , default:"Pirikhah"})
  lastName: string;

  @ApiProperty({type:String , default:"erfan@gmail.com"})
  email: string;

  @ApiProperty({type:String , default:"123456789"})
  password: string;

  @ApiProperty({type:String , default:"i'm Erfan Pirikhah ."})
  bio:string;

  @ApiProperty({type:String , default:""})
  image:string
}
