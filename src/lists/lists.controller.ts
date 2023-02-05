import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { List } from './list.entity';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private service: ListsService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getList(params.id);
  }

  @Post()
  create(@Body() list: List) {
    return this.service.saveList(list);
  }

  @Put()
  update(@Body() list: List) {
    return this.service.saveList(list);
  }

  @Delete(':id')
  deleteList(@Param() params) {
    this.service.deleteList(params.id);
    return;
  }
}
