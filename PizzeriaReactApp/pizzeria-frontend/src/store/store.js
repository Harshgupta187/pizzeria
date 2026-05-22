import { configureStore } from "@reduxjs/toolkit";

import pizzaReducer from "../features/pizzas/pizzaSlice.js";
import ingredientReducer from "../features/ingredients/ingredientSlice.js";
import cartReducer from "../features/cart/cartSlice.js";


export const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
    ingredients: ingredientReducer,
    cart: cartReducer,
  }
})