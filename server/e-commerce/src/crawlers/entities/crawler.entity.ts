import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'locations' })
export class Crawler {
  @Prop()
  name: string;

  @Prop()
  photo: string;
  @Prop()
  working_hours_start: string;
  @Prop()
  working_hours_end: string;
  @Prop()
  address: string;
  @Prop({ type: Object })
  location: {
    type: 'Point';
    coordinates: [number, number];
  };

  @Prop()
  isopen: boolean;

  @Prop()
  is_open_allday: boolean;

  phone: string;
}

export const crawlerSchema = SchemaFactory.createForClass(Crawler);
