import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { nanoid } from 'nanoid';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as cloudinary from 'cloudinary';
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        // destination: (req, file, cb) => {
        //   cb(null, '/AppData/Local/Temp/');
        // },
        filename: (req, file, cb) => {
          const fileName = nanoid();
          const splittedPath = file.originalname.split('.');
          const fileExtention = splittedPath[splittedPath.length - 1];
          cb(null, `${fileName}.${fileExtention}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await cloudinary.v2.uploader.upload(file.path);
    return result;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // @Get()
  // async findAllProducts() {
  //   return await this.productsService.;
  // }
  @Get()
  async findAll(
    @Query('search') search: string,
    @Query('limit') limit: number,
    @Query('filter') filter: string,
    @Query('page') page: number,
  ) {
    return await this.productsService.findAll(search, limit, filter, page);
  }
  @Get('count')
  async findAllCount() {
    return await this.productsService.findAllCOunt();
  }

  // @Get(':_id')
  // async findOneById(
  //   @Param('_id') _id:string
  // ) {
  //   return await this.productsService.findOne(_id);
  // }

  @Post('/ids')
  async findAllProduct(@Body('ids') ids: [string]) {
    console.log('controlleriin ids', ids);
    return this.productsService.findAllProduct(ids);
  }
  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    console.log('id maani', _id);
    return await this.productsService.findOne(_id);
  }

  // @Post(':_ids/findnearest')
  // findNearest(@Param('_id') id:string ,@Query('lat') lat: number, @Query('long') long: number) {
  //   console.log(id);
    
  //   return this.productsService.findNearest(id,lat, long);
  // }
  // @Post(':_ids/findnearest')
  // findNearest(
  //   @Param('_id') id: string,
  //   @Query('lat') lat: number,
  //   @Query('long') long: number,
  // ) {
  //   console.log(id);

  //   return this.productsService.findNearest(id, lat, long);
  // }
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
