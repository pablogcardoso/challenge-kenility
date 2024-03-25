import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from 'src/arquitecture/database/schemas/user.schema';
import { Authorization, AuthorizationSchema } from 'src/arquitecture/database/schemas/authorizations.schema';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, {name: Authorization.name, schema: AuthorizationSchema }])],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
