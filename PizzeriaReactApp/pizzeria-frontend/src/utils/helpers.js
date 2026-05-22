/**
 * Format price to display with rupee symbol
 * @param {number} price
 * @returns {string} e.g. ₹290.00
 */
export const formatPrice = (price) => {
  return `₹${Number(price).toFixed(2)}`;
};

/**
 * Calculate total price of selected ingredients
 * @param {Array} ingredients
 * @returns {number}
 */
export const calcToppingTotal = (ingredients) => {
  return ingredients.reduce((acc, item) => acc + item.price, 0);
};

/**
 * Check if a pizza type is veg
 * @param {string} type
 * @returns {boolean}
 */
export const isVeg = (type) => type === "veg";