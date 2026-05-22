import axios from "axios";

import { PIZZA_API } from "../../utils/constant.js";
const BASE_URL = PIZZA_API;

export const fetchPizzasApi = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};