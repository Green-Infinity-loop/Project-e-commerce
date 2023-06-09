import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Mongoose, { ObjectId, Types } from 'mongoose';
import { nanoid } from 'nanoid';
import { Brand } from 'src/brands/entities/brand.entity';
import { Locations } from 'src/locations/entities/location.entity';


@Schema({ timestamps: true })
@Schema({timestamps:true})
@Schema({ timestamps: true })
@Schema({ timestamps: true })
export class Product {
  // @Prop({ default: () => nanoid(), type: String })
  // _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: Array, ref: 'Locations' })
  location: [{
    locationId: [string];
    quantity:[number];
  }];
  createdAt: Date;
  UpdatedAt: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
