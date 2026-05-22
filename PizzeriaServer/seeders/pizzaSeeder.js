import dotenv from "dotenv";
import connectDB from "../config/database.js";

import Pizza from "../models/Pizza.Model.js";
import pizzas from "../data/pizzas.js";

dotenv.config();

connectDB();

const seedPizzaData = async () => {
  try {
    await Pizza.deleteMany();

    await Pizza.insertMany(pizzas);

    console.log("Pizza data seeded");

    
  } catch (error) {
    console.log(error);
  }
};

seedPizzaData();