import { logInDto } from './dto/login.dto';
import { AuthService } from './services/auth.service';
import { UserDto } from './dto/user.dto';
import { logOutDto } from './dto/logout.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(logIn: logInDto): Promise<any>;
    register(userDto: UserDto): Promise<import("../../domain/types/http-response.type").HttpResponse>;
    logOuth(logOut: logOutDto, res: any): Promise<void>;
}
