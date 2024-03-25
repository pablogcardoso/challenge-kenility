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
exports.AuthService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const authorizations_schema_1 = require("../../../arquitecture/database/schemas/authorizations.schema");
let AuthService = class AuthService {
    constructor(authorizationModel, userService, jwtService) {
        this.authorizationModel = authorizationModel;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(user) {
        const { password, username, email } = user;
        const userFound = await this.userService.existUserData(user);
        if (userFound) {
            if (userFound.email == email) {
                throw new common_1.HttpException('EMAIL_IN_USE', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
            if (userFound.username == username) {
                throw new common_1.HttpException('USERNAME_IN_USE', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const created = await this.userService.createUser(Object.assign(Object.assign({}, user), { password: passwordHash }));
        return { statusCode: 201, message: "user added" };
    }
    async logIn(logIn) {
        const user = await this.userService.getUserByEmail(logIn.email);
        if (!bcrypt.compare(user === null || user === void 0 ? void 0 : user.password, logIn.password)) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: user.email, username: user.username };
        const token = await this.jwtService.signAsync(payload);
        await this.authorizationModel.create({ username: user.username, email: user.email, token });
        return { access_token: token };
    }
    async logOut(email) {
        return this.authorizationModel.deleteOne({ email: { $eq: email } });
    }
    async isLogged(email) {
        return this.authorizationModel.find({ email: email.sub });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(authorizations_schema_1.Authorization.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        user_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map