import express from "express";
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from "../controllers/categoryControllers";

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategory as any);
router.post('/', createCategory);
router.put('/:id', updateCategory as any);
router.delete('/:id', deleteCategory as any);

export default router
