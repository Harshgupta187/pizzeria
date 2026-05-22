import Pizza from "../models/Pizza.Model.js";

export const getAllPizzas = async (req , res) => {
  try {
    const pizzas = await Pizza.find()
    res.status(200).json({
      success: true,
      count: pizzas.length,
      pizzas
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}