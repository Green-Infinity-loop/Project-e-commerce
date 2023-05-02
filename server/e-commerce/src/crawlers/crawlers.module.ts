import { Module } from '@nestjs/common';
import { CrawlersService } from './crawlers.service';
import { CrawlersController } from './crawlers.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Crawler, crawlerSchema } from './entities/crawler.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crawler.name, schema: crawlerSchema }]),
  ],
  controllers: [CrawlersController],
  providers: [CrawlersService],
})
export class CrawlersModule {}
