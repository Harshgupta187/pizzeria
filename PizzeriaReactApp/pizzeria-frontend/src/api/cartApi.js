import axios from "axios";

import { CART_API } from "../../utils/constant.js";
const BASE_URL = CART_API;


export const fetchCartApi = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};

export const addToCartApi = async (data) => {
  const response = await axios.post(`${BASE_URL}/add`, data);

  return response.data;
};

export const updateCartApi = async (
  itemId,
  quantity
) => {

  const response = await axios.put(
    `${BASE_URL}/update/${itemId}`,
    { quantity }
  );

  return response.data;
};


export const deleteCartItemApi = async (
  itemId
) => {

  const response = await axios.delete(
    `${BASE_URL}/remove/${itemId}`
  );

  return response.data;
};