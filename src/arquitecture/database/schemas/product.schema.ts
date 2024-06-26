import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    sku:string;

    @Prop({ required: true })
    picture:string;

    @Prop({ required: true })
    price:string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);