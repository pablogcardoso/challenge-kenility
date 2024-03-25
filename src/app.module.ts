import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductModule } from './modules/products/product.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './modules/auth/constants/jwt.constant';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/challange'),
  AuthModule,
  ProductModule,
  OrdersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
