import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { INGREDIENT_API } from "../../utils/constant.js";
const BASE_URL = INGREDIENT_API;


export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);