import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export default class UserEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true, nullable: false })
  firstName: string;

  @ApiProperty()
  @Column({ nullable: false })
  lastName: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @Column({ select: false, nullable: false })
  password: string;

  @ApiProperty()
  @Column({default: ''})
  bio: string;

  @ApiProperty()
  @Column({default: ''})
  image: string;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  created: Date;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updated: Date;
}
