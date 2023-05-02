import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema()
export class Brand {
  @Prop({ default: () => nanoid(), type: String })
  _id: string;

  @Prop({ required: true })
  brand: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
