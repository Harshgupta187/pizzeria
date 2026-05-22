import Ingredients from "../models/Ingredient.Model.js";

export const getAllIngredients = async (req , res) => {
  try {
    const ingredients = await Ingredients.find();
    res.status(200).json({
      success: true,
      count: ingredients.length,
      ingredients
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}