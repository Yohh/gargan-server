import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Present } from './present.entity';

@Injectable()
export class PresentsService {
  constructor(
    @InjectRepository(Present)
    private presentsRepository: Repository<Present>,
  ) {}

  async getPresents(): Promise<Present[]> {
    return await this.presentsRepository.find();
  }

  async getPresent(id: number): Promise<Present[]> {
    return await this.presentsRepository.find({
      select: ['name', 'isUrgent', 'link', 'expensiveRate'],
      where: [{ id: id }],
    });
  }

  savePresent(present: Present): Promise<Present> {
    return this.presentsRepository.save(present);
  }

  deletePresent(present: Present): void {
    this.presentsRepository.delete(present);
  }
}
