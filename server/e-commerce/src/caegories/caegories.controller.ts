import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caegoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaegoryDto: UpdateCaegoryDto) {
    return this.caegoriesService.update(+id, updateCaegoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caegoriesService.remove(+id);
  }
}
