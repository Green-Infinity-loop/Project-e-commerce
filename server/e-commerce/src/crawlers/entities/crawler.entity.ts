import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'products' })
export class Crawler {
  @Prop()
  title: string;

  @Prop()
  price: number;
  @Prop()
  image: string;
}

export const crawlerSchema = SchemaFactory.createForClass(Crawler);
