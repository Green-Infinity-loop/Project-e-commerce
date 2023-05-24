import { Module } from '@nestjs/common';
import { CaegoriesService } from './caegories.service';
import { CaegoriesController } from './caegories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Caegory, CaegorySchema } from './entities/caegory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Caegory.name, schema: CaegorySchema },
    ]),
  ],
  controllers: [CaegoriesController],
  providers: [CaegoriesService]
})
export class CaegoriesModule {}
