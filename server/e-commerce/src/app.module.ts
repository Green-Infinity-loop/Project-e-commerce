import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CaegoriesModule } from './caegories/caegories.module';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import env from '../env';
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './brands/brands.module';
import { CrawlersModule } from './crawlers/crawlers.module';

const MONGO = process.env.MONGODB_URL;
console.log(MONGO);

@Module({
  imports: [
    MongooseModule.forRoot(env.MONGODB_URL),
    ProductsModule,
    UsersModule,
    CaegoriesModule,
    PharmaciesModule,
    AuthModule,
    BrandsModule,
    CrawlersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
