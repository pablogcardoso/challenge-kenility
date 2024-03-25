"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const orders_module_1 = require("./modules/orders/orders.module");
const product_module_1 = require("./modules/products/product.module");
const jwt_1 = require("@nestjs/jwt");
const jwt_constant_1 = require("./modules/auth/constants/jwt.constant");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true }), jwt_1.JwtModule.register({
                global: true,
                secret: jwt_constant_1.jwtConstants.secret,
                signOptions: { expiresIn: '7d' },
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/challange'),
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            orders_module_1.OrdersModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map