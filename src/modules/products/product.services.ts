import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from './dtos/product.dto';
import { HttpResponse } from 'src/domain/types/http-response.type';
import { Product } from './../../arquitecture/database/schemas/product.schema';
import { PaginationDto } from './dtos/pagination.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async crateProduct(product: ProductDto) {
        let created = null;
        try {
            created = await this.productModel.create({ ...product });
            return { statusCode: 201, message: "SUCCESSFULL", data: created };
        } catch (error) {
            return { statusCode: 500, message: "ERROR_DB_INSERT", error };
        }

    }

    async getProduct(pagination: PaginationDto): Promise<HttpResponse> {
        try {
            const products = await this.productModel.find();
            return { data: products, statusCode: 200, message: "SUCCESSFULL" }
        } catch (error) {
            return { statusCode: 500, message: "ERROR_DB_QUERY", error }
        }
    }

    private async getProductCount(): Promise<number> {
        let count = await this.productModel.countDocuments();
        return count;
    }
} 