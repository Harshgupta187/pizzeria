import Cart from "../models/ShoppingCart.Model.js";
import Pizza from "../models/Pizza.Model.js";
import Ingredients from "../models/Ingredient.Model.js";

export const addToCart = async (req , res) =>{
  try {
    const {pizzaId, quantity , extraToppings} = req.body;

    
    const pizza = await Pizza.findOne({ id: pizzaId }); 

    if(!pizza){
      return res.status(404).json({
        success: false,
        message: "Pizza not found"
      })
    }

    let cart = await Cart.findOne();

    if(!cart){
      cart = await Cart.create({
        items: [],
        totalAmount: 0,
        totalItems: 0
      });
    }

    let ingredientsPrice = 0;
    let toppingIds = []; 

    if(extraToppings?.length > 0){
      
      const toppings = await Ingredients.find({
        _id: { $in: extraToppings} 
      });

      ingredientsPrice = toppings.reduce((acc ,item) => acc + item.price, 0);
      
      
      toppingIds = toppings.map(topping => topping._id);
    }

    const finalPrice = (pizza.price + ingredientsPrice) * quantity;

    cart.items.push({
      pizza: pizza._id,        
      quantity,
      extraToppings: toppingIds, 
      price: finalPrice,
    });

    cart.totalAmount += finalPrice;
    cart.totalItems += quantity;

    await cart.save();

    res.status(201).json({
      success: true,
      message: "Item added to cart",
      cart,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
export const getCartItems = async (req, res) =>{
  try {
    const cart = await Cart.findOne()
      .populate("items.pizza")
      .populate("items.extraToppings");

    if(!cart){
      return res.status(200).json({
        success: true,
        items: [],
        totalAmount: 0,
        totalItems: 0,
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}



export const updateCartToppings = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { extraToppings } = req.body;

    const cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    const item = cart.items.id(itemId);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

  
    let toppingPrice = 0;
    let toppingIds = [];

    if (extraToppings?.length > 0) {
      const toppings = await Ingredients.find({
        _id: { $in: extraToppings },
      });

      toppingPrice = toppings.reduce((acc, t) => acc + t.price, 0);
      toppingIds = toppings.map((t) => t._id);
    }

  
    const pizza = await Pizza.findById(item.pizza);

    
    const newPrice = (pizza.price + toppingPrice) * item.quantity;

  
    cart.totalAmount -= item.price;
    cart.totalAmount += newPrice;

    
    item.extraToppings = toppingIds;
    item.price = newPrice;

    await cart.save();

  
    const updatedCart = await Cart.findOne()
      .populate("items.pizza")
      .populate("items.extraToppings");

    res.status(200).json({
      success: true,
      message: "Toppings updated",
      cart: updatedCart,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateCartQuantity = async (req , res) =>{
  try {
    const {itemId} = req.params;
    const {quantity} = req.body;

    const cart = await Cart.findOne();

    if(!cart){
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.id(itemId);
    
    if(!item){
      return res.status(404).json({
        success: false,
        message: "Cart item not found"
      })
    }

    const singlePrice = item.price / item.quantity;

    cart.totalAmount -= item.price;
    cart.totalItems -= item.quantity;

    item.quantity = quantity;

    item.price = singlePrice * quantity;

    cart.totalAmount += item.price;
    cart.totalItems += quantity;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Quantity updated",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

export const removeCartItem = async (req, res) => {
  try {
    const {itemId} = req.params;
    const cart = await Cart.findOne();

    if(!cart){
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.id(itemId);

    if(!item){
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    cart.totalAmount -= item.price;
    cart.totalItems -= item.quantity;

    item.deleteOne();

    await cart.save();
    
    res.status(200).json({
      success: true,
      message: "Item removed",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    cart.items = [];
    cart.totalAmount = 0;
    cart.totalItems = 0;

    await cart.save();

    res.status(200).json({ success: true, message: "Cart cleared", cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};