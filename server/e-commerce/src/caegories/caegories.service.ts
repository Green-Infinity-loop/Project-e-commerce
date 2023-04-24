import { Injectable } from '@nestjs/common';
import { CreateCaegoryDto } from './dto/create-caegory.dto';
import { UpdateCaegoryDto } from './dto/update-caegory.dto';

@Injectable()
export class CaegoriesService {
  create(createCaegoryDto: CreateCaegoryDto) {
    return 'This action adds a new caegory';
  }

  findAll() {
    return `This action returns all caegories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caegory`;
  }

  update(id: number, updateCaegoryDto: UpdateCaegoryDto) {
    return `This action updates a #${id} caegory`;
  }

  remove(id: number) {
    return `This action removes a #${id} caegory`;
  }
}
