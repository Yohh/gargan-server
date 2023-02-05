import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Present } from './present.entity';
import { PresentsController } from './presents.controller';
import { PresentsService } from './presents.service';

@Module({
  imports: [TypeOrmModule.forFeature([Present])],
  controllers: [PresentsController],
  providers: [PresentsService],
})
export class PresentsModule {}
