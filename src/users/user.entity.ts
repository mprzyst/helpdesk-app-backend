import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.ADMIN,
})
role: UserRole
}
