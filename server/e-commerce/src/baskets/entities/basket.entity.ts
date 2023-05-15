import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import { User } from 'src/users/entities/user.entity';

export class BaskteItem {
  productId: string;
  quantity: number;
}

Schema({ timestamps: true });
export class Basket {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop()
  userId: string;

  user: User;

  @Prop({ type: Object })
  items: BaskteItem[];

  @Prop({ default: true })
  isMain: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export const BaskterSchema = SchemaFactory.createForClass(Basket);

BaskterSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
});
