import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({
    default: UserRole.ADMIN,
  })
  role: UserRole.ADMIN;
}
