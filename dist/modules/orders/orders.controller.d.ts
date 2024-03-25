import { OrdersService } from './services/orders.services';
import { QueryOrderDto } from './dto/query-order.dto';
import { OrderDto } from './dto/order.dto';
import { OrderUpdateDto } from './dto/order-update.dto';
export declare class OrdersController {
    private orderServices;
    constructor(orderServices: OrdersService);
    createOrdes(order: OrderDto, res: any): Promise<void>;
    updateOrdes(idOrder: string, order: OrderUpdateDto, res: any): Promise<void>;
    getTotalSoldPrice(res: any, orderQuery: QueryOrderDto): Promise<void>;
    getHigherAmountOrders(res: any): Promise<void>;
}
