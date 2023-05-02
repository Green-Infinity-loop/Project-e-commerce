import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { response } from 'express';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { CreateCrawlerDto } from './dto/create-crawler.dto';
import { UpdateCrawlerDto } from './dto/update-crawler.dto';
import { Crawler } from './entities/crawler.entity';

@Injectable()
export class CrawlersService {
  constructor(
    @InjectModel(Crawler.name) private readonly crawlerModel: Model<Crawler>,
  ) {}
  create(createCrawlerDto: CreateCrawlerDto) {
    return this.crawlerModel.create(createCrawlerDto);
  }

  async findAll() {
    const body = {
      cat_id: '40',
      brand: [],
      sort: 'top',
      filters: {
        age_type: [],
        gender: [],
        form_type: [],
        season_type: [],
        manu_type: [],
      },
    };
    for (let i = 1; i < 20; i++) {
      const request = await axios.post(
        'https://back.emonos.mn/api/product/v2/filtered?limit=20&offset=0',
        { ...body, cat_id: String(i) },
      );
      const data = await request.data;
      const products = data.data.products;
      console.log(data.data.products?.count);

      if (data.data.products) {
        for (let j = 0; j < products?.results.length; j++) {
          const product = products.results[j];
          console.log(product);
          const selectedProduct = {
            title: product.name,
            price: product.price,
            image: product.photo,
          };
          await this.crawlerModel.create(selectedProduct);
        }
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} crawler`;
  }

  update(id: number, updateCrawlerDto: UpdateCrawlerDto) {
    return `This action updates a #${id} crawler`;
  }

  remove(id: number) {
    return `This action removes a #${id} crawler`;
  }
}
