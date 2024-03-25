/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { OrderDto } from '../dto/order.dto';
import { Order } from './../../../arquitecture/database/schemas/order.schema';
import { OrderUpdateDto } from '../dto/order-update.dto';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(order: OrderDto): Promise<{
        data: import("mongoose").Document<unknown, {}, Order> & Order & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
        statusCode: number;
        error?: undefined;
    } | {
        data: string;
        message: string;
        statusCode: number;
        error?: undefined;
    } | {
        error: any;
        message: string;
        statusCode: number;
        data?: undefined;
    }>;
    updateOrder(idOrder: string, order: OrderUpdateDto): Promise<{
        data: import("mongoose").UpdateWriteOpResult;
        message: string;
        statusCode: number;
        error?: undefined;
    } | {
        error: any;
        message: string;
        statusCode: number;
        data?: undefined;
    }>;
    getTotalSoldPrice(date: string): Promise<any>;
    getHigherAmountOrders(): Promise<{
        data: {
            amount: number;
        };
        message: string;
        status: number;
        error?: undefined;
    } | {
        error: any;
        message: string;
        status: number;
        data?: undefined;
    }>;
}
