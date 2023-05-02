import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll(createBrandDto: CreateBrandDto) {
    return this.brandsService.findAll(createBrandDto);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.brandsService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(_id, updateBrandDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.brandsService.remove(_id);
  }
}
