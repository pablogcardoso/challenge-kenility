import { ProductEntity } from "./product.type";

export interface OrderEntity {
    idOrder: string;
    clientName: string;
    total: number;
    products: ProductEntity[];
}