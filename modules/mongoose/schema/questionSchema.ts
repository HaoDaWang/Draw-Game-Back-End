import * as mongoose from 'mongoose';

export let questionSchema:mongoose.Schema = new mongoose.Schema({
    name:{type:String}
});