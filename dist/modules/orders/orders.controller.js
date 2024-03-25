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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_services_1 = require("./services/orders.services");
const guard_services_1 = require("../../shared/guard/guard.services");
const query_order_dto_1 = require("./dto/query-order.dto");
const order_dto_1 = require("./dto/order.dto");
const order_update_dto_1 = require("./dto/order-update.dto");
let OrdersController = class OrdersController {
    constructor(orderServices) {
        this.orderServices = orderServices;
    }
    async createOrdes(order, res) {
        try {
            const created = await this.orderServices.createOrder(order);
            res.status(created.statusCode).json(created);
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                code: 500
            });
        }
    }
    async updateOrdes(idOrder, order, res) {
        try {
            const udp = await this.orderServices.updateOrder(idOrder, order);
            res.status(udp.statusCode).json(udp);
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                code: 500
            });
        }
    }
    async getTotalSoldPrice(res, orderQuery) {
        try {
            const total = await this.orderServices.getTotalSoldPrice(orderQuery.date);
            res.status(total.status).json(total);
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                error: error,
                code: 500
            });
        }
    }
    async getHigherAmountOrders(res) {
        try {
            const total = await this.orderServices.getHigherAmountOrders();
            res.status(total.status).json(total);
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                error: error,
                code: 500
            });
        }
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)("orders"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.OrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrdes", null);
__decorate([
    (0, common_1.Patch)("orders/:idOrder"),
    __param(0, (0, common_1.Param)('idOrder')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_update_dto_1.OrderUpdateDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateOrdes", null);
__decorate([
    (0, common_1.Get)('orders/total-sold-price'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, query_order_dto_1.QueryOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getTotalSoldPrice", null);
__decorate([
    (0, common_1.Get)('orders/higher-amount-order'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getHigherAmountOrders", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)({ version: '1' }),
    (0, common_1.UseGuards)(guard_services_1.AuthGuard),
    __metadata("design:paramtypes", [orders_services_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map