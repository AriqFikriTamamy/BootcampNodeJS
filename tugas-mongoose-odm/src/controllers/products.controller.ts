import {Request, Response} from "express";
import ProductsModel from "../models/products.model";
import CategoriesModel from "../models/categories.model";

export default {
    async create(req: Request, res: Response) {
        try{
            const {categoryId, name, description, images, price, qty} = req.body;
            const productResult = await ProductsModel.create({
                name, description, images, price, qty, categoryId
            });
            const category = await CategoriesModel.findById(categoryId).select('_id name createdAt updatedAt __v');
            const responseData = {...productResult.toObject(), categoryId: category ? {_id: category._id, name: category.name, createdAt:category.createdAt, updatedAt: category.updatedAt, __V: category.__v} : null};
            res.status(201).json({
                data: responseData, message: "Success create prooduct"
            });
        }catch(error){
            const err = error as Error;
            res.status(500).json({
                data: err.message, message: "Failed create product"
            });
        }
    },
    async findAll(req: Request, res: Response){
        try{
            const result = await ProductsModel.find().populate('categoryId', "__id name createdAt updatedAt __v");
            res.status(200).json({
                data: result, message: "Success find all products"
            });
        }catch(error){
            const err = error as Error;
            res.status(500).json({
                data: err.message, message: "Failed get all products"
            });
            console.log(err);
        }
    },
    async findOne(req: Request, res: Response){
        try{
            const result = await ProductsModel.findOne({
                _id: req.params.id,
            }).populate('categoryId', '__id name createdAt updatedAt __v');
            res.status(200).json({
                data: result, message: "Success get one product"
            });
        }catch(error){
            const err = error as Error;
            res.status(500).json({
                data: err.message, message: "Failed get one product"
            });
        }
    },
    async update(req: Request, res: Response){
        try{
            const result = await ProductsModel.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {
                    new: true,
                }
            ).populate('categoryId', '_id name createdAt updateddAt __v');
            res.status(200).json({
                data: result, message: "Success update product"
            })
        }catch(error){
            const err = error as Error;
            res.status(500).json({
                data: err.message, message: "Failed update product"
            });
        }
    },
    async delete(req: Request, res: Response){
        try{
            const result = await ProductsModel.findOneAndDelete({
                _id: req.params.id
            });
            res.status(200).json({
                data: result, message: "Success delete product"
            });
        }catch(error){
            const err = error as Error;
            res.status(500).json({
                data: err.message, message: "Failed delete product",
            })
        }
    },
    async createProductWithCategory(req: Request, res: Response){
        try{
            const {categoryId, name, description, images, price, qty} = req.body;
            const categoryCheck = await CategoriesModel.findById(categoryId);
            if(!categoryCheck){
                return res.status(404).json({
                    message: "Category not found"
                });
            }

            const productResult = await ProductsModel.create({
                name, description, images, price, qty, categoryId
            });
            res.status(201).json({
                data: productResult, message: "Success create product with category"
            })
        }catch(error){
            const err = error as Error;
            res.status(500).json({data: err.message, message: "Failed create product with category"})
        }
    }
}