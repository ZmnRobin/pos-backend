import { Expose, Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class LoginSerializeDto {
  @Expose()
  @Transform((params) => params.obj._id.toString())
  readonly _id: ObjectId;

  @Expose()
  readonly name: string;

  @Expose()
  readonly phone: string;

  @Expose()
  readonly role: string;

  @Expose()
  readonly refreshToken: string;

  @Expose()
  readonly accessToken: string;
}
