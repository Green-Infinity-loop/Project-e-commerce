import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCaegoryDto } from './dto/create-caegory.dto';
import { UpdateCaegoryDto } from './dto/update-caegory.dto';
import { Caegory } from './entities/caegory.entity';

@Injectable()
export class CaegoriesService {
  constructor(
    @InjectModel(Caegory.name) private readonly caegoryModel: Model<Caegory>,
  ) {}

  create(createCaegoryDto: CreateCaegoryDto) {
    return this.caegoryModel.create(createCaegoryDto);
  }

  async findAll() {
    return this.caegoryModel.find();
  }

  async findOne(_id: string) {
    const category = await this.caegoryModel.findOne({ _id });
    return category;
  }

  // findOne(_id: string) {
  //   return this.caegoryModel.findOne({_id});
  // }

  async update(_id: string, updateCaegoryDto: UpdateCaegoryDto) {
    const result = await this.caegoryModel.updateOne({ _id }, updateCaegoryDto);
    return result;
  }

  async remove(_id: string) {
    await this.caegoryModel.deleteOne({ _id });

    return await this.caegoryModel.find();
  }
}
