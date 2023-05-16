import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Mongoose, { Types } from 'mongoose';
import { nanoid } from 'nanoid';
import { Brand } from 'src/brands/entities/brand.entity';

@Schema()
export class Product {
  // @Prop({ default: () => nanoid(), type: String })
  // _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: String, ref: 'Brand' })
  brand: string;
  createdAt: Date;
  UpdatedAt: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
