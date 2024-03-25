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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_dto_1 = require("./dtos/product.dto");
const product_services_1 = require("./product.services");
const guard_services_1 = require("../../shared/guard/guard.services");
const pagination_dto_1 = require("./dtos/pagination.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(product, res) {
        try {
            const result = await this.productService.crateProduct(product);
            res.status(result.statusCode).json(result);
        }
        catch (error) {
            res.status(500).json({
                error: error,
                message: 'SERVER_ERROR',
                statusCode: error.statusCode
            });
        }
    }
    async requestProduct(pagination, res) {
        try {
            const result = await this.productService.getProduct(pagination);
            res.status(result.statusCode).json(result);
        }
        catch (error) {
            res.status(500).json({
                error: error,
                message: 'SERVER_ERROR',
                statusCode: error.statusCode
            });
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)("products"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)("products"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "requestProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)({ version: "1" }),
    (0, common_1.UseGuards)(guard_services_1.AuthGuard),
    __metadata("design:paramtypes", [product_services_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map