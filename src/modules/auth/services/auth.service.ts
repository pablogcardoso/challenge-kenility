import { Model } from 'mongoose';
import { Injectable, Inject, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { logInDto } from '../dto/login.dto';
import { UsersService } from './user.service';
import { UserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { HttpResponse } from 'src/domain/types/http-response.type';
import { Authorization } from 'src/arquitecture/database/schemas/authorizations.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Authorization.name) private authorizationModel: Model<Authorization>,
    private userService: UsersService,
    private jwtService: JwtService) { }
  /**
   * 
   * @param user 
   * @returns 
   */
  async register(user: UserDto): Promise<HttpResponse> {
    const { password, username, email } = user;
    const userFound = await this.userService.existUserData(user);

    if (userFound) {
      if (userFound.email == email) {
        throw new HttpException('EMAIL_IN_USE', HttpStatus.UNPROCESSABLE_ENTITY);
      }
      if (userFound.username == username) {
        throw new HttpException('USERNAME_IN_USE', HttpStatus.UNPROCESSABLE_ENTITY);
      }
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const created = await this.userService.createUser({ ...user, password: passwordHash });
    return { statusCode: 201, message: "user added" };
  }
  /**
   * 
   * @param logIn 
   * @returns 
   */
  async logIn(logIn: logInDto): Promise<any> {

    const user = await this.userService.getUserByEmail(logIn.email);

    if (!bcrypt.compare(user?.password, logIn.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.email, username: user.username };
    const token = await this.jwtService.signAsync(payload);

    await this.authorizationModel.create({ username: user.username, email: user.email, token });

    return { access_token: token };

  }
  /**
   * 
   * @param logIn LoginDto
   * @returns Promise
   */
  async logOut(email: string):Promise<any> {
    return this.authorizationModel.deleteOne({email:{$eq:email}});
  }

  /**
   * 
   * @param logIn LoginDto
   * @returns Promise
   */
  async isLogged(email: any):Promise<any> {

    return this.authorizationModel.find({email:email.sub});
  }
}