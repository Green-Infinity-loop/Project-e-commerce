import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Mongoose, { ObjectId, Types } from 'mongoose';
import { nanoid } from 'nanoid';
import { Brand } from 'src/brands/entities/brand.entity';
import { Locations } from 'src/locations/entities/location.entity';

<<<<<<< HEAD
@Schema({ timestamps: true })
=======
@Schema({timestamps:true})
>>>>>>> e1104ade4904c9aa44a21f1b311e958b95d465de
export class Product {
  // @Prop({ default: () => nanoid(), type: String })
  // _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: Types.ObjectId, ref: 'Locations' })
  location: [{}];
  createdAt: Date;
  UpdatedAt: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
