import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from 'src/brands/entities/brand.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  async findAll() {
    return await this.productModel.find().populate('brand');
  }

  async findOne(_id: string) {
    return await this.productModel.findOne({ _id });
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    const result = await this.productModel.updateOne({ _id }, updateProductDto);
    return result;
  }

  async remove(_id: string) {
    await this.productModel.deleteOne({ _id });

    return _id;
  }
}
