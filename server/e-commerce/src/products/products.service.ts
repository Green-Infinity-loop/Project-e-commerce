import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Brand } from 'src/brands/entities/brand.entity';
import { Locations } from 'src/locations/entities/location.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
    @InjectModel(Locations.name)
    private readonly locationModel: Model<Locations>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  async findAll(search: string, limit: number, filter: string, page: number) {
    const condition: any = {};
    console.log('limit is ', limit);

    if (filter) {
      condition.genres = { $regex: new RegExp(`${filter}`, 'i') };
    }

    if (search) {
      condition.title = { $regex: new RegExp(`${search}`, 'i') };
    }
    const skip = Number(limit * page);

    return await this.productModel
      .find(condition)
      .skip(Number(skip))
      .limit(Number(limit))
      .populate('location')
      .exec();
  }

  async findAllProduct(ids: [string]) {
    console.log('ids', ids);
    return this.productModel.find({ _id: { $in: ids } });
  }

  async findOne(_id: string) {
    console.log(this.productModel.find({ _id: _id }));
    const product = await this.productModel.findOne({
      _id: new mongoose.Types.ObjectId(_id),
    });
    return product;
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    const result = await this.productModel.updateOne({ _id }, updateProductDto);
    return result;
  }

  async remove(_id: string) {
    await this.productModel.deleteOne({ _id });

    return _id;
  }

  async findAllCOunt() {
    return await this.productModel.find().count({});
  }
}
