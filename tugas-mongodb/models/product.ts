import mongoose, {Schema, Document} from "mongoose";
import {ICategory} from "./category";

export interface IProduct extends Document{
    name: string;
    price: number;
    category: mongoose.Schema.Types.ObjectId | ICategory
}

const ProductSchema: Schema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type:mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);