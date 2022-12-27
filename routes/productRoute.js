import express from "express";
import { createNewProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/createNew", createNewProduct);

export default router;
