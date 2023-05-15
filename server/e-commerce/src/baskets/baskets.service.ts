import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { Basket } from './entities/basket.entity';

@Injectable()
export class BasketsService {
  constructor(
    @InjectModel(Basket.name) private readonly basketModel: Model<Basket>,
    private readonly productService: ProductsService,
  ) {}
  async findMain(userId: string) {
    let mainBasket: Basket = await this.basketModel.findOne({
      userId,
      isMain: true,
    });
    if (!mainBasket) {
      mainBasket = await this.creatNewMain(userId);
    }
    return mainBasket;
  }

  async creatNewMain(userId: string) {
    return await this.basketModel.create({ userId, isMain: true });
  }

  async addProduct(userId: string, productId: string, quantity: number) {
    const mainBasket = await this.findMain(userId);
    const product = this.productService;
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    console.log('ProductId:', productId);
    console.log('userId:', userId);
    let updatedQuantity = false;

    if (!mainBasket.items) {
      mainBasket.items = [{ productId, quantity }];

      console.log('ProductId:', productId);
      console.log('quantity:', quantity);
      console.log('mainbasket.items:', mainBasket.items);
    } else {
      mainBasket.items = mainBasket.items.map((item) => {
        if (item.productId === productId) {
          item.quantity += quantity;
          updatedQuantity = true;
        }
        return item;
      });

      if (!updatedQuantity) {
        mainBasket.items.push({ productId, quantity });
      }
    }
    const { _id, ...updatedBasket } = mainBasket;

    console.log('mainBasket.items:', mainBasket.items);
    await this.basketModel.findByIdAndUpdate({ _id }, updatedBasket);
    return mainBasket;
  }
}
