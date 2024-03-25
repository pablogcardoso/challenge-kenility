import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './services/orders.services';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/arquitecture/database/schemas/order.schema';

@Module({
    imports:[MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {};