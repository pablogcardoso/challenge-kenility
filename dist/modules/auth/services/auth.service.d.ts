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
import { logInDto } from '../dto/login.dto';
import { UsersService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { HttpResponse } from 'src/domain/types/http-response.type';
import { Authorization } from 'src/arquitecture/database/schemas/authorizations.schema';
export declare class AuthService {
    private authorizationModel;
    private userService;
    private jwtService;
    constructor(authorizationModel: Model<Authorization>, userService: UsersService, jwtService: JwtService);
    register(user: UserDto): Promise<HttpResponse>;
    logIn(logIn: logInDto): Promise<any>;
    logOut(email: string): Promise<any>;
    isLogged(email: any): Promise<any>;
}
