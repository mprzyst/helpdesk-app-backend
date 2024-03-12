import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {
    this.repo = repo;
  }
  create(email: string, password: string, name: string, surname: string) {
    const user = this.repo.create({ email, password, name, surname });
    return this.repo.save(user);
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  async update(id: string, attrs: Partial<User>) {
    //find and update
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User not found');

    Object.assign(user, attrs); //copy all attrs and copy directly to user
    return this.repo.save(user);
  }
  async remove(id: string) {
    const user = await this.findOne(id); //user entity
    if (!user) throw new NotFoundException('User not found');

    return this.repo.remove(user);
  }
}
