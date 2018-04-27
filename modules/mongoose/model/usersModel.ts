import { db } from '../db';
import { usersSchema } from '../schema/usersSchema';
import { Model, Document } from 'mongoose';

export let usersModel:Model<Document> = db.model("usersModel",usersSchema,"Users");