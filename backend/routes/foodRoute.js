import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import authMiddleware from "../middleware/auth.js";

const foodRouter = express.Router();

foodRouter.post("/add", authMiddleware,addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",authMiddleware,removeFood);

export default foodRouter;
