import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.productModel(createProductDto);
    return result.save();
  }

  async findAll(createProductDto: CreateProductDto): Promise<Product[]> {
    const result = await this.productModel.find();
    return result;
  }

  async findOne(_id: string) {
    return await this.productModel.findById(_id);
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    const result = await this.productModel.updateOne({ _id }, updateProductDto);
    return;
  }

  async remove(_id: string) {
    return await this.productModel.deleteOne({ _id });
  }
}
