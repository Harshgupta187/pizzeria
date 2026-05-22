import axios from "axios";

import { INGREDIENT_API } from "../../utils/constant.js";
const BASE_URL = INGREDIENT_API;

export const fetchIngredientsApi = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};