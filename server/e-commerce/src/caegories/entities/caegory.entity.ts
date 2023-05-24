import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()

export class Caegory {
    @Prop({ required: true })
  name: string;


   createdAt: Date;
  UpdatedAt: Date;
}
export const CaegorySchema = SchemaFactory.createForClass(Caegory);
