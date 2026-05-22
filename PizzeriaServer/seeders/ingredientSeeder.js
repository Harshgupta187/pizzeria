import dotenv from "dotenv";
import connectDB from "../config/database.js";

import Ingredient from "../models/Ingredient.Model.js";
import ingredients from "../data/ingredients.js";


dotenv.config();
connectDB();

const seedIngredientData = async () => {
  try {
    await Ingredient.deleteMany();

    await Ingredient.insertMany(ingredients);

    console.log("Ingredient data seeded");
  } catch (error) {
    console.log(error);
  }
};

seedIngredientData();