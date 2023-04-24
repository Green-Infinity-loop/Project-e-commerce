import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CaegoriesModule } from './caegories/caegories.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import env from '../env';

const MONGO = process.env.MONGODB_URL;
console.log(MONGO);

@Module({
  imports: [MongooseModule.forRoot(env.MONGODB_URL), ProductsModule, UsersModule, CaegoriesModule, PharmaciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
