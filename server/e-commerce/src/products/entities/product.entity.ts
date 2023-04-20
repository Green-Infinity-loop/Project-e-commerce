import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema()
export class Product {
  @Prop({ default: () => nanoid(), type: String })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  price: number;

  @Prop({})
  brand: string;
  createdAt: Date;
  UpdatedAt: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
