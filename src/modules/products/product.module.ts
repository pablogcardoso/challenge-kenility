import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.services';
import { ProductSchema, Product } from './../../arquitecture/database/schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}