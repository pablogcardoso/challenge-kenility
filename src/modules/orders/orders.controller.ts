import { Body, Controller, Get, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { OrdersService } from './services/orders.services';
import { AuthGuard } from 'src/shared/guard/guard.services';
import { QueryOrderDto } from './dto/query-order.dto';
import { OrderDto } from './dto/order.dto';
import { OrderUpdateDto } from './dto/order-update.dto';

@Controller({version: '1'})
@UseGuards(AuthGuard)
export class OrdersController {

    constructor(private orderServices:OrdersService) {}

    @Post("orders")
    async createOrdes(@Body() order:OrderDto, @Res() res) {
        try {
            const created = await this.orderServices.createOrder(order);
            res.status(created.statusCode).json(created); 
        } catch (error) {
            res.status(500).json({
                message: error.message,
                code:500
            }); 
        }
    }

    @Patch("orders/:idOrder")
    async updateOrdes(@Param('idOrder') idOrder: string, @Body() order:OrderUpdateDto, @Res() res) {
        try {
            const udp = await this.orderServices.updateOrder(idOrder, order);
            res.status(udp.statusCode).json(udp); 
        } catch (error) {
            res.status(500).json({
                message: error.message,
                code:500
            }); 
        }
    } 

    /**
     * Get the higher amount order
     * Get the total sold price in the last month.
     */
    @Get('orders/total-sold-price')
    async getTotalSoldPrice(@Res() res, @Query() orderQuery:QueryOrderDto) {
        try {
            const total = await this.orderServices.getTotalSoldPrice(orderQuery.date);
            res.status(total.status).json(total); 
        } catch (error) {
            res.status(500).json({
                message: error.message,
                error: error,
                code:500
            }); 
        }
    }

    @Get('orders/higher-amount-order')
    async getHigherAmountOrders(@Res() res) {
        try {
            const total = await this.orderServices.getHigherAmountOrders();
            res.status(total.status).json(total); 
        } catch (error) {
            res.status(500).json({
                message: error.message,
                error: error,
                code:500
            }); 
        }
    }
}