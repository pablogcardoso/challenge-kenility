import { ProductDto } from './dtos/product.dto';
import { ProductService } from './product.services';
import { PaginationDto } from './dtos/pagination.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(product: ProductDto, res: any): Promise<void>;
    requestProduct(pagination: PaginationDto, res: any): Promise<void>;
}
