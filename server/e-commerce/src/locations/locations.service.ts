import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Locations } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Locations.name)
    private readonly locationModel: Model<Locations>,
  ) {}
  create(createLocationDto: CreateLocationDto) {
    return this.locationModel.create(createLocationDto);
  }

  findAll() {
    return this.locationModel.find();
  }

  findNearest(lat, long) {
    console.log('lat long hevlegdlee', [parseFloat(long), parseFloat(lat)]);
    return this.locationModel.findOne({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(long), parseFloat(lat)],
          },
          $minDistance: 0,
          $maxDistance: 5000,
        },
      },
    });
  }

  async findNearestId(_id, lat, long) {
    const locationId = await this.locationModel.findOne({ _id });
    if (!locationId) {
      throw new HttpException('Location none', HttpStatus.BAD_REQUEST);
    }
    return await this.locationModel.findOne({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(long), parseFloat(lat)],
          },
          $minDistance: 0,
          $maxDistance: 5000,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
