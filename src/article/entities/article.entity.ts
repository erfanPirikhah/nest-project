import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('article')
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    slug: string;
  
    @Column()
    title: string;
  
    @Column({default: ''})
    description: string;
  
    @Column({default: ''})
    body: string;
  
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created: Date;
  
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    updated: Date;
}
