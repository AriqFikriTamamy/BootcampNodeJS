import { Request, Response } from "express";
import { Product } from "../models/product";
import { Category } from "../models/category";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find().populate("category");
        res.status(200).json(products);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id).populate("category");
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, category } = req.body;
        const existingCategory = await Category.findById(category);
        if (!existingCategory) return res.status(404).json({ message: "Category not found" });
        const newProduct = new Product({ name, price, category });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

// Update product
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { category } = req.body;
        if (category) {
            const existingCategory = await Category.findById(category);
            if (!existingCategory) return res.status(404).json({ message: "Category not found" });
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("category");
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
