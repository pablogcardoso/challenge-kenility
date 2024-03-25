import { Body, Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ProductDto } from './dtos/product.dto';
import { ProductService } from './product.services';
import { AuthGuard } from 'src/shared/guard/guard.services';
import { PaginationDto } from './dtos/pagination.dto';

@Controller({ version: "1" })
@UseGuards(AuthGuard)
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post("products")
    async createProduct(@Body() product: ProductDto, @Res() res) {

        try {
            const result = await this.productService.crateProduct(product);
            res.status(result.statusCode).json(result);
        } catch (error) {
            res.status(500).json({
                error: error,
                message: 'SERVER_ERROR',
                statusCode: error.statusCode
            });
        }
    }

    @Get("products")
    async requestProduct(@Query() pagination: PaginationDto, @Res() res) {
        try {
            const result = await this.productService.getProduct(pagination);
            res.status(result.statusCode).json(result);
        } catch (error) {
            res.status(500).json({
                error: error,
                message: 'SERVER_ERROR',
                statusCode: error.statusCode
            });
        }
    }
}
