import express from 'express';

import {addToCart , getCartItems , updateCartQuantity, removeCartItem, clearCart, updateCartToppings} from '../controllers//cart.Controller.js';

const router = express.Router();

router.get("/" , getCartItems);

router.post("/add", addToCart);

router.put("/update/:itemId" , updateCartQuantity);
router.put("/update-toppings/:itemId", updateCartToppings);

router.delete("/remove/:itemId" , removeCartItem);

router.delete("/clear", clearCart);  

export default router;
