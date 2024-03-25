"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const order_schema_1 = require("./../../../arquitecture/database/schemas/order.schema");
const mongoose_2 = require("@nestjs/mongoose");
let OrdersService = class OrdersService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createOrder(order) {
        try {
            const duplicatedIdentifier = await this.orderModel.find({ idOrder: order.idOrder });
            if (duplicatedIdentifier.length == 0) {
                const created = await this.orderModel.create(order);
                return { data: created, message: "created", statusCode: 201 };
            }
            else {
                return { data: "", message: "ID_ORDER_DUPLICATED", statusCode: 500 };
            }
        }
        catch (error) {
            return { error, message: "SERVER_ERROR", statusCode: 500 };
        }
    }
    async updateOrder(idOrder, order) {
        if (!order || !idOrder)
            throw new Error("INVALID_ID_ON_FIND_REQUEST");
        try {
            const udp = await this.orderModel.updateOne({ idOrder: { $eq: idOrder } }, { total: order.total });
            if ((udp === null || udp === void 0 ? void 0 : udp.acknowledged) !== false && (udp === null || udp === void 0 ? void 0 : udp.modifiedCount) == 1) {
                return { data: udp, message: "updated", statusCode: 200 };
            }
            return { error: udp, message: "ORDER_NOT_UPDATED", statusCode: 404 };
        }
        catch (error) {
            return { error, message: "SERVER_ERROR", statusCode: 500 };
        }
    }
    async getTotalSoldPrice(date) {
        try {
            const dateFiltered = new Date(date);
            var minDate = new Date(dateFiltered.getFullYear(), dateFiltered.getMonth(), 1);
            var maxDate = new Date(dateFiltered.getFullYear(), dateFiltered.getMonth() + 1, 0);
            const totalSoldPrice = await this.orderModel.find({
                date: { $gte: minDate, $lte: maxDate }
            });
            const total = totalSoldPrice.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0);
            return { data: { total }, message: "OK", status: 200 };
        }
        catch (error) {
            return { error: error, message: "ERROR_TO_GET_TOTAL", status: 500 };
        }
    }
    async getHigherAmountOrders() {
        try {
            const totalSoldPrice = await this.orderModel.find();
            const higherAmount = totalSoldPrice.reduce(function (previousValue, currentValue) {
                return (currentValue.total > previousValue.total) ? currentValue : previousValue;
            });
            return { data: { amount: higherAmount.total }, message: "OK", status: 200 };
        }
        catch (error) {
            return { error: error, message: "ERROR_TO_GET_TOTAL", status: 500 };
        }
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], OrdersService);
//# sourceMappingURL=orders.services.js.map