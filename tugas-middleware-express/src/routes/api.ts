import express from "express";
import { Request, Response } from "express";
import { single, multiple } from "../middlewares/upload.middleware";

const router = express.Router();

router.post("/upload/single", single, (req: Request, res: Response): void => {
    if(!req.file){
        res.status(400).json({message: 'No File Uploaded'});
        return;
    }
    res.status(200).json({message: "File uploaded successfully", file: req.file})
});
router.post("/upload/multiple", multiple, (req: Request, res: Response): void => {
    if (!req.files || req.files.length === 0) {
        res.status(400).json({ message: "No files uploaded" });
        return;
      }
      res.status(200).json({ message: "Files uploaded successfully", files: req.files });
});

export default router;
