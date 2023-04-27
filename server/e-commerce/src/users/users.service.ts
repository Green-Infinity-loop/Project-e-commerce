import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(_id: string) {
    return await this.userModel.findOne({ _id });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userModel.findByIdAndUpdate(
      { _id },
      updateUserDto,
    );
    return result;
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async remove(_id: string) {
    await this.userModel.deleteOne({ _id });
    return _id;
  }
}
