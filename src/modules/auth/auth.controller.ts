import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { logInDto } from './dto/login.dto';
import { AuthService } from './services/auth.service';
import { UserDto } from './dto/user.dto';
import { logOutDto } from './dto/logout.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() logIn: logInDto) {
        try {
            return this.authService.logIn(logIn);
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.UNAUTHORIZED);
        }
    }

    @Post('register')
    async register(@Body() userDto: UserDto) {
        try {
            return this.authService.register(userDto);
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @Post('logouth')
    async logOuth(@Body() logOut: logOutDto,  @Res() res) {
        try {
            const deleted = await this.authService.logOut(logOut.email);
            res.status(200).json({statusCode:200,message:"SUCCESSFUL", data:deleted}); 
        } catch (error) {
            res.status(500).json({
                message: error.message,
                error:error,
                statusCode:500
            }); 
        }
    }
}