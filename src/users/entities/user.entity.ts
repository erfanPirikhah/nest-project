import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  firstName: string;
  
  @Column({ nullable: false })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false, nullable: false })
  password: string;

  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  image: string;
}
