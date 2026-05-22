import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CART_API } from "../../utils/constant.js";

const BASE_URL = CART_API;

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data.cart;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const addPizzaToCart = createAsyncThunk(
  "cart/addPizzaToCart",
  async (cartData, thunkAPI) => {
    try {
  
      await axios.post(`${BASE_URL}/add`, cartData);

      
      const populatedCart = await axios.get(BASE_URL);
      return populatedCart.data.cart;

    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ itemId, quantity }, thunkAPI) => {
    try {
      
      await axios.put(`${BASE_URL}/update/${itemId}`, { quantity });

      
      const populated = await axios.get(BASE_URL);
      return populated.data.cart;

    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (itemId, thunkAPI) => {
    try {
     
      await axios.delete(`${BASE_URL}/remove/${itemId}`);

      
      const populated = await axios.get(BASE_URL);
      return populated.data.cart;

    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const buildCustomPizza = createAsyncThunk(
  "cart/buildCustomPizza",
  async (selectedIngredients, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const cartItems = state.cart.items;

     
      if (!cartItems || cartItems.length === 0) {
        return thunkAPI.rejectWithValue(
          "Please add a pizza to your cart first before adding extra toppings."
        );
      }

      
      const lastCartItem = cartItems[cartItems.length - 1];
      const itemId = lastCartItem._id;

      if (!itemId) {
        return thunkAPI.rejectWithValue(
          "Could not find cart item. Please try again."
        );
      }

      
      const response = await axios.put(
        `${BASE_URL}/update-toppings/${itemId}`,
        {
          extraToppings: selectedIngredients.map((item) => item._id),
        }
      );

      return response.data.cart;

    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/clear`);
      return response.data.cart;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);