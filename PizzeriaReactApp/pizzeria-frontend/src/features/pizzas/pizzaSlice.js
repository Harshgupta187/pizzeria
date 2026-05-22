import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./pizzaService.js"; 

const pizzaSlice = createSlice({
  name: "pizzas",

  initialState: {
    pizzas: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.loading = false;
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pizzaSlice.reducer;