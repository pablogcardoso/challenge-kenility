import { ProductDto } from 'src/modules/products/dtos/product.dto';
export declare class OrderDto {
    idOrder: string;
    clientName: string;
    date: string;
    total: number;
    products: ProductDto[];
}
