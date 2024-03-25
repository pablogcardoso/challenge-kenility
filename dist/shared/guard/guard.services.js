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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_constant_1 = require("../../modules/auth/constants/jwt.constant");
const auth_service_1 = require("../../modules/auth/services/auth.service");
let AuthGuard = class AuthGuard {
    constructor(jwtService, authServices) {
        this.jwtService = jwtService;
        this.authServices = authServices;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        console.log("token: ", token);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwt_constant_1.jwtConstants.secret
            });
            const isLogged = await this.authServices.isLogged(payload);
            if (isLogged.length > 0) {
                request['products'] = payload;
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log("GUARD_ERROR", error);
            return false;
        }
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [typeToken, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return typeToken === 'Bearer' ? token : null;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(auth_service_1.AuthService)),
    __metadata("design:paramtypes", [jwt_1.JwtService, auth_service_1.AuthService])
], AuthGuard);
//# sourceMappingURL=guard.services.js.map