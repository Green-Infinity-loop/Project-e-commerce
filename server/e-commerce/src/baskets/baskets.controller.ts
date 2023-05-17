import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Secured } from 'src/auth/secured.decorator';
import { User } from 'src/users/entities/user.entity';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Controller('baskets')
export class BasketsController {
  constructor(private readonly basketsService: BasketsService) {}

  // @Post()
  // create(@Body() createBasketDto: CreateBasketDto) {
  //   return this.basketsService.create(createBasketDto);
  // }

  @Secured()
  @Get('/main')
  findone(@CurrentUser() user: User) {
    return this.basketsService.findMain(user._id);
  }

  @Post('/add')
  addProduct(
    @CurrentUser() user: User,
    @Body('product') productId: string,
    @Body('quantity') quantity: number,
  ) {
    return this.basketsService.addProduct(user._id, productId, quantity);
  }
}
