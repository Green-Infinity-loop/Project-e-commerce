import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(createProductDto: CreateProductDto) {
    console.log(createProductDto);

    return this.productsService.findAll(createProductDto);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.productsService.findOne(_id);
  }

  @Patch(':_id')
  update(
    @Param('_id') _id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(_id, updateProductDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.productsService.remove(_id);
  }
}
