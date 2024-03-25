import { ProductDto } from 'src/modules/products/dtos/product.dto';
export declare class OrderUpdateDto {
    clientName: string;
    total: number;
    date: string;
    products: ProductDto[];
}
