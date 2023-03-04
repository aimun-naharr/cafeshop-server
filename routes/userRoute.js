import express from "express";
import { getAllUsers, loginUser, signUpUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/login",loginUser);
router.post("/signup", signUpUser);
router.get("/getAll", getAllUsers);

export default router;