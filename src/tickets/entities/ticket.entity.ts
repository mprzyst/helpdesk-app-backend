import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('identity')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  categories: number[];
  @Column()
  status: string;
  @Column()
  dateCreated: Date;
  @Column()
  dateLastChanged: Date;
  @Column()
  clientEmail: string;
}
