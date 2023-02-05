import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { List } from './list.entity';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private service: ListsService) {}

  @Get()
  get() {
    return this.service.getLists();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.service.getList(params.id);
  }

  @Post()
  create(@Body() list: List) {
    return this.service.saveList(list);
  }

  @Patch(':id')
  update(@Param() params, @Body() data: {}) {
    return this.service.updateList(params, data);
  }

  @Delete(':id')
  deleteList(@Param() params) {
    this.service.deleteList(params.id);
    return;
  }
}
