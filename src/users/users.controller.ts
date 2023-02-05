import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  get() {
    return this.service.getUsers();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Patch(':id')
  update(@Param() params, @Body() data: {}) {
    return this.service.updateUser(params, data);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);
    return;
  }
}
