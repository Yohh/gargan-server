import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ListsModule } from './lists/lists.module';
import { PresentsModule } from './presents/presents.module';
import { databaseConfig } from './config/database.config';
import { UserToPresentModule } from './user-to-present/user-to-present.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    ConfigModule.forRoot(),
    UsersModule,
    ListsModule,
    PresentsModule,
    UserToPresentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
