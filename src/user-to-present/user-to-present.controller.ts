import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UserToPresent } from './user-to-present.entity';
import { UserToPresentService } from './user-to-present.service';

@Controller('user-to-present')
export class UserToPresentController {
  constructor(private service: UserToPresentService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUserToPresent(params.id);
  }

  @Post()
  create(@Body() userToPresent: UserToPresent) {
    return this.service.saveUserToPresent(userToPresent);
  }

  @Put()
  update(@Body() userToPresent: UserToPresent) {
    return this.service.saveUserToPresent(userToPresent);
  }

  @Delete(':id')
  deleteUserToPresent(@Param() params) {
    this.service.deleteUserToPresent(params.id);
    return;
  }
}
