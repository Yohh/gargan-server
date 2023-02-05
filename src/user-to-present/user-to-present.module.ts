import { Module } from '@nestjs/common';
import { UserToPresentService } from './user-to-present.service';
import { UserToPresentController } from './user-to-present.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToPresent } from './user-to-present.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserToPresent])],
  providers: [UserToPresentService],
  controllers: [UserToPresentController],
})
export class UserToPresentModule {}
