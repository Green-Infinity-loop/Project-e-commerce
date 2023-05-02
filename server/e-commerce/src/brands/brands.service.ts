import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
  ) {}
  create(createBrandDto: CreateBrandDto) {
    return this.brandModel.create(createBrandDto);
  }

  async findAll(createBrandDto: CreateBrandDto) {
    return this.brandModel.find(createBrandDto);
  }

  findOne(_id: string) {
    const result = this.brandModel.findOne({ _id });
    return result;
  }

  update(_id: string, updateBrandDto: UpdateBrandDto) {
    const result = this.brandModel.findByIdAndUpdate({ _id }, updateBrandDto);
    return result;
  }

  remove(_id: string) {
    const result = this.brandModel.deleteOne({ _id });
    return result;
  }
}
