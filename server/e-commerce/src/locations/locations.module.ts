import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Locations, LocationSchema } from './entities/location.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Locations.name,
        schema: LocationSchema,
      },
    ]),
  ],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
