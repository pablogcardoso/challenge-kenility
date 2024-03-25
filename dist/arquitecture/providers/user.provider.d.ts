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
import { Connection } from 'mongoose';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("../schemas/user.schema").User, {}, {}, {}, import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<import("../schemas/user.schema").User, import("mongoose").Model<import("../schemas/user.schema").User, any, any, any, import("mongoose").Document<unknown, any, import("../schemas/user.schema").User> & import("../schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("../schemas/user.schema").User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("../schemas/user.schema").User>> & import("mongoose").FlatRecord<import("../schemas/user.schema").User> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
}[];
