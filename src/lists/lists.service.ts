import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './list.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listsRepository: Repository<List>,
  ) {}

  async getLists(): Promise<List[]> {
    return await this.listsRepository.find({ relations: { presents: true } });
  }

  async getList(id: number): Promise<List[]> {
    return await this.listsRepository.find({
      select: ['name', 'main', 'category'],
      where: [{ id: id }],
      relations: { presents: true },
    });
  }

  saveList(list: List): Promise<List> {
    return this.listsRepository.save(list);
  }

  deleteList(list: List): void {
    this.listsRepository.delete(list);
  }
}
