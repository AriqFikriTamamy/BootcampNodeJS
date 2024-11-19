import {Request, Response} from "express";
import { Category } from "../models/category";

export const getCategories = async (req: Request, res: Response) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }catch (error) {
        const err = error as Error;
        res.status(500).json({message: err.message});
    }
};

export const getCategory = async (req: Request, res: Response) => {
    try{
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).json({message: "Category not found"});
        res.status(200).json(category);
    }catch (error) {
        const err = error as Error;
        res.status(500).json({message: err.message});
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try{
        const {name, description} = req.body;
        const newCategory = new Category({name, description});
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    }catch (error){
        const err = error as Error;
        res.status(500).json({message: err.message});
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try{
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedCategory) return res.status(404).json({message: "Category not found"});
        res.status(200).json(updateCategory)
    } catch(error){
        const err = error as Error;
        res.status(500).json({message: err.message})
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try{
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if(!deletedCategory) return res.status(404).json({message: "Category not found"});
        res.status(200).json({message: "Category deleted successfully"});
    } catch (error) {
        const err = error as Error;
        res.status(500).json({message: err.message})
    }
}