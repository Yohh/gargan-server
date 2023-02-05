import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Present } from './present.entity';

@Injectable()
export class PresentsService {
  constructor(
    @InjectRepository(Present)
    private presentsRepository: Repository<Present>,
  ) {}

  async getPresents(): Promise<Present[]> {
    return await this.presentsRepository.find({
      relations: { userToPresents: true },
    });
  }

  async getPresent(id: number): Promise<Present[]> {
    return await this.presentsRepository.find({
      select: ['name', 'isUrgent', 'link', 'expensiveRate'],
      where: [{ id: id }],
      relations: { userToPresents: true },
    });
  }

  savePresent(present: Present): Promise<Present> {
    return this.presentsRepository.save(present);
  }

  updatePresent(id: number, data: {}): Promise<UpdateResult> {
    return this.presentsRepository.update(id, data);
  }

  deletePresent(present: Present): void {
    this.presentsRepository.delete(present);
  }
}
