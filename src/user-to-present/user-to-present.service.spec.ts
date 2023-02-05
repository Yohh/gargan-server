import { Test, TestingModule } from '@nestjs/testing';
import { UserToPresentService } from './user-to-present.service';

describe('UserToPresentService', () => {
  let service: UserToPresentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserToPresentService],
    }).compile();

    service = module.get<UserToPresentService>(UserToPresentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
