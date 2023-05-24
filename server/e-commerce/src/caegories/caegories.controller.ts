import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CaegoriesService } from './caegories.service';
import { CreateCaegoryDto } from './dto/create-caegory.dto';
import { UpdateCaegoryDto } from './dto/update-caegory.dto';

@Controller('caegories')
export class CaegoriesController {
  constructor(private readonly caegoriesService: CaegoriesService) {}

  @Post()
  create(@Body() createCaegoryDto: CreateCaegoryDto) {
    return this.caegoriesService.create(createCaegoryDto);
  }

  @Get()
  findAll() {
    return this.caegoriesService.findAll();
  }

  @Get(':_id')
  findOne(@Param('id') _id: string) {
    return this.caegoriesService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('id') _id: string, @Body() updateCaegoryDto: UpdateCaegoryDto) {
    return this.caegoriesService.update(_id, updateCaegoryDto);
  }

  @Delete(':_id')
  remove(@Param('id') _id: string) {
    return this.caegoriesService.remove(_id);
  }
}
