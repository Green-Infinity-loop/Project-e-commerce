import { PartialType } from '@nestjs/mapped-types';
import { CreateCaegoryDto } from './create-caegory.dto';

export class UpdateCaegoryDto extends PartialType(CreateCaegoryDto) {}
