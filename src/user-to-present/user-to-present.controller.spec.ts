import { Test, TestingModule } from '@nestjs/testing';
import { UserToPresentController } from './user-to-present.controller';

describe('UserToPresentController', () => {
  let controller: UserToPresentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserToPresentController],
    }).compile();

    controller = module.get<UserToPresentController>(UserToPresentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
