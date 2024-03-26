import { Schema } from 'mongoose';

export type UserType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
};
