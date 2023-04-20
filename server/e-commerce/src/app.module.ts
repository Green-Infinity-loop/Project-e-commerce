import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import env from '../env';

const MONGO = process.env.MONGODB_URL;
console.log(MONGO);

@Module({
  imports: [MongooseModule.forRoot(env.MONGODB_URL), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
