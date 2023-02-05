import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PresentsService } from './presents.service';
import { Present } from './present.entity';

@Controller('presents')
export class PresentsController {
  constructor(private service: PresentsService) {}

  @Get()
  get() {
    return this.service.getPresents();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.service.getPresent(params.id);
  }

  @Post()
  create(@Body() present: Present) {
    return this.service.savePresent(present);
  }

  @Patch(':id')
  update(@Param() params, @Body() data: {}) {
    return this.service.updatePresent(params, data);
  }

  @Delete(':id')
  deletePresent(@Param() params) {
    this.service.deletePresent(params.id);
    return;
  }
}
