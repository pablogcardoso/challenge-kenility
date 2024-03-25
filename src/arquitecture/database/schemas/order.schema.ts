
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {

    @Prop({ index: true })
    idOrder: string;

    @Prop()
    clientName: string;

    @Prop()
    total: number;

    @Prop({ default: Date.now() })
    date: Date;

    @Prop()
    products: [Product];

}
export const OrderSchema = SchemaFactory.createForClass(Order);
