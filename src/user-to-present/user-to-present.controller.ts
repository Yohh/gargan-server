import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { UserToPresent } from './user-to-present.entity';
import { UserToPresentService } from './user-to-present.service';

@Controller('user-to-present')
export class UserToPresentController {
  constructor(private service: UserToPresentService) {}

  @Get()
  get() {
    return this.service.getUserToPresents();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.service.getUserToPresent(params.id);
  }

  @Post()
  create(@Body() userToPresent: UserToPresent) {
    return this.service.saveUserToPresent(userToPresent);
  }

  @Patch(':id')
  update(@Param() params, @Body() data: {}) {
    return this.service.updateUserToPresent(params, data);
  }

  @Delete(':id')
  deleteUserToPresent(@Param() params) {
    this.service.deleteUserToPresent(params.id);
    return;
  }
}
