import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/arquitecture/database/schemas/user.schema';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async getUserByEmail(email:string): Promise<User> {
        return this.userModel.findOne({email}).exec()
    }

    async createUser(user:UserDto) {
        try {
            return this.userModel.create(user);
        } catch (error) {
            throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    async existUserData(user:UserDto):Promise<User>{
        return this.userModel.findOne(
            {
                $or:[{email:user.email},{username:user.username}]
            }
        );
    }
}