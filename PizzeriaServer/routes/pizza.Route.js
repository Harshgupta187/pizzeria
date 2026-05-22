import express from "express";

import { getAllPizzas } from "../controllers/pizza.Controller.js";

const router = express.Router();

router.get("/", getAllPizzas);

export default router;