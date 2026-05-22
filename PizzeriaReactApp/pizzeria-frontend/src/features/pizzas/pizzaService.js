import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { PIZZA_API } from "../../utils/constant.js";
const BASE_URL = PIZZA_API;

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data.pizzas;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);