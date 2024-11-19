// import express from "express";
// import { Product } from "../models/product";
// import {Request, Response} from "express";

// const router = express.Router();

// router.get("/category/:categoryId", async (req: Request, res: Response) => {
//     try{
//         const products = await Product.find({category: req.params.categoryId}).populate("category");
//         res.status(200).json(products);
//     }catch (error) {
//         const err = error as Error;
//         res.status(500).json({message: err.message});
//     }
// });

// export default router;

import express from "express";
import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productControllers";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct as any);
router.post("/", createProduct as any);
router.put("/:id", updateProduct as any);
router.delete("/:id", deleteProduct as any);

export default router;
