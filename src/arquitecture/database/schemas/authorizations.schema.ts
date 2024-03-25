
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorizationDocument = HydratedDocument<Authorization>;

@Schema()
export class Authorization {

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    token:string;

    @Prop()
    refreshToken:string;

    @Prop()
    expiryDate:Date;

}
export const AuthorizationSchema = SchemaFactory.createForClass(Authorization);
