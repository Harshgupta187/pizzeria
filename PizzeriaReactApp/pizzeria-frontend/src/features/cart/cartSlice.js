import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartItems,
  addPizzaToCart,
  updateCartQuantity,
  removeCartItem,
  buildCustomPizza,
  clearCart,
} from "./cartService.js";

const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
  loading: false,
  error: null,
};


const syncCart = (state, cart) => {
  state.items = cart?.items || [];
  state.totalAmount = cart?.totalAmount || 0;
  state.totalItems = cart?.totalItems || 0;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        syncCart(state, action.payload);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    
      .addCase(addPizzaToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPizzaToCart.fulfilled, (state, action) => {
        state.loading = false;
        syncCart(state, action.payload);
      })
      .addCase(addPizzaToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        syncCart(state, action.payload);
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.error = action.payload;
      })

  
      .addCase(removeCartItem.fulfilled, (state, action) => {
        syncCart(state, action.payload);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.error = action.payload;
      })

      
      .addCase(buildCustomPizza.pending, (state) => {
        state.loading = true;
      })
      .addCase(buildCustomPizza.fulfilled, (state, action) => {
        state.loading = false;
        syncCart(state, action.payload);
      })
      .addCase(buildCustomPizza.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
        state.totalAmount = 0;
        state.totalItems = 0;
      });
  },
});

export const { clearError } = cartSlice.actions;
export default cartSlice.reducer;