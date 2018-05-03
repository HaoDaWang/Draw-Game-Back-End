import { db } from '../db';
import { Model, Document } from 'mongoose';
import { questionSchema } from '../schema/questionSchema';

export let questionModel:Model<Document> = db.model("questionModel",questionSchema,"Questions");