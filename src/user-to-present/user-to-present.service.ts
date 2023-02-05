import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserToPresent } from './user-to-present.entity';

@Injectable()
export class UserToPresentService {
  constructor(
    @InjectRepository(UserToPresent)
    private UserToPresentRepository: Repository<UserToPresent>,
  ) {}

  async getUserToPresents(): Promise<UserToPresent[]> {
    return await this.UserToPresentRepository.find({
      relations: { user: true, present: true },
    });
  }

  async getUserToPresent(id: number): Promise<UserToPresent[]> {
    return await this.UserToPresentRepository.find({
      select: ['isExpensive', 'offeror', 'partOfferor', 'amount', 'percentage'],
      where: [{ id: id }],
      relations: { user: true, present: true },
    });
  }

  saveUserToPresent(userToPresent: UserToPresent): Promise<UserToPresent> {
    return this.UserToPresentRepository.save(userToPresent);
  }

  updateUserToPresent(id: number, data: {}): Promise<UpdateResult> {
    return this.UserToPresentRepository.update(id, data);
  }

  deleteUserToPresent(userToPresent: UserToPresent): void {
    this.UserToPresentRepository.delete(userToPresent);
  }
}
