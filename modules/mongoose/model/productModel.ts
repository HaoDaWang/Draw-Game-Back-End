import { Model, Document } from "mongoose";
import { db } from "../db";
import { productSchema } from "../schema/productSchema";

export let productModel:Model<Document> = db.model("productModel",productSchema,"Products")