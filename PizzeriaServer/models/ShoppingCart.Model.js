import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    pizza: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: 1,
    },

    extraToppings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredients",
      },
    ],

    price: {
      type: Number,
      required: true,
    },
  },
 
);

const cartSchema = new mongoose.Schema(
  {
    items: [cartItemSchema],

    totalAmount: {
      type: Number,
      default: 0,
    },

    totalItems: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;