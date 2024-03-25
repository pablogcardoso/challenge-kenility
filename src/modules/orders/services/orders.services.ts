import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { OrderDto } from '../dto/order.dto';
import { Order } from './../../../arquitecture/database/schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { OrderUpdateDto } from '../dto/order-update.dto';
import { OrderEntity } from 'src/domain/types/order.type';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) { }

    async createOrder(order: OrderDto) {
        try {
            const duplicatedIdentifier = await this.orderModel.find({ idOrder: order.idOrder});

            if (duplicatedIdentifier.length == 0) {
                const created = await this.orderModel.create(order);
                return { data: created, message: "created", statusCode: 201 }
            } else {
                return { data: "", message: "ID_ORDER_DUPLICATED", statusCode: 500 }
            }
            
        } catch (error) {
            return { error, message: "SERVER_ERROR", statusCode: 500 }
        }
    }

    async updateOrder(idOrder:string, order: OrderUpdateDto) {

        if (!order || !idOrder) throw new Error("INVALID_ID_ON_FIND_REQUEST");

        try {
            const udp = await this.orderModel.updateOne({idOrder:{$eq:idOrder}},{...order});
            if (udp?.acknowledged !== false && udp?.modifiedCount == 1) {
                return { data: udp, message: "updated", statusCode: 200 };
            }
            return { error:udp, message: "ORDER_NOT_UPDATED", statusCode: 404 };
        } catch (error) {
            return { error, message: "SERVER_ERROR", statusCode: 500 };
        }
    }

    /**
     * Get the total sold price per month of any year
     */
    async getTotalSoldPrice(date: string): Promise<any> {
        try {
            const dateFiltered = new Date(date);

            var minDate = new Date(dateFiltered.getFullYear(), dateFiltered.getMonth(), 1);
            var maxDate = new Date(dateFiltered.getFullYear(), dateFiltered.getMonth() + 1, 0);

            const totalSoldPrice = await this.orderModel.find({
                date: { $gte: minDate, $lte: maxDate }
            });
            const total = totalSoldPrice.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0);
            return { data: { total }, message: "OK", status: 200 };

        } catch (error) {
            return { error: error, message: "ERROR_TO_GET_TOTAL", status: 500 };
        }
    }
    /**
     * Get the higher amount order 
     */
    async getHigherAmountOrders() {
        try {
            const totalSoldPrice = await this.orderModel.find();

            const higherAmount = totalSoldPrice.reduce(function (previousValue, currentValue) {
                return (currentValue.total > previousValue.total) ? currentValue : previousValue;
            });

            return { data: { amount: higherAmount.total }, message: "OK", status: 200 }
        } catch (error) {
            return { error: error, message: "ERROR_TO_GET_TOTAL", status: 500 }
        }
    }
}