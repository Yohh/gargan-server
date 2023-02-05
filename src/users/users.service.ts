import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'pseudo', 'email'],
      relations: {
        lists: { presents: true },
        userToPresents: { present: true },
      },
    });
  }

  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['pseudo', 'email'],
      where: [{ id: id }],
      relations: {
        lists: { presents: true },
        userToPresents: { present: true },
      },
    });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  deleteUser(user: User): void {
    this.usersRepository.delete(user);
  }
}
