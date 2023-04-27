import { Module } from '@nestjs/common';
import { CaegoriesService } from './caegories.service';
import { CaegoriesController } from './caegories.controller';

@Module({
  controllers: [CaegoriesController],
  providers: [CaegoriesService]
})
export class CaegoriesModule {}
