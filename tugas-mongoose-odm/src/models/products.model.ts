import mongoose, {Types} from "mongoose";

export interface Product{
    name: string;
    description: string;
    images: string[];
    price: number;
    qty: {
        type: typeof Schema.Types.Number,
        required: true,
        min: [1, "Minimal qty adalah 1"]
    },
    categooryId?: {
        type: typeof Schema.Types.ObjectId,
        ref: "Category"
    },
    createdAt: string;
    updatedAt: string;
    _id?: Types.ObjectId
}

const Schema = mongoose.Schema;

const ProductsSchema = new Schema <Product>(
    {
        name: {
            type: Schema.Types.String,
            required: true
        },
        description: {
            type: Schema.Types.String,
            required: true
        },
        images: {
            type: [Schema.Types.String],
            required: true
        },
        price: {
            type: Schema.Types.Number,
            required: true
        },
        qty: {
            type: Schema.Types.Number,
            required: true
        },
        categooryId: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
    },
    {
        timestamps: true
    }
);

const ProductsModel = mongoose.model("Product", ProductsSchema, "products");

export default ProductsModel;