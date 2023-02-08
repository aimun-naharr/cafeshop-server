import express from "express";
import { createNewProduct, getAllProducts, getOneProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/createNew", createNewProduct);
router.get("/getAll", getAllProducts);
router.get("/:id", getOneProduct);

export default router;
