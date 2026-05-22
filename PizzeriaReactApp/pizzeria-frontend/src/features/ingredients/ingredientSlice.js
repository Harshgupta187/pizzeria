import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./ingredientService.js";

const ingredientSlice = createSlice({
  name: "ingredients",

  initialState: {
    ingredients: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ingredientSlice.reducer;