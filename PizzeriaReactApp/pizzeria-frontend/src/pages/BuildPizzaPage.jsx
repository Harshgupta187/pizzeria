import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchIngredients } from "../features/ingredients/ingredientService.js";
import { buildCustomPizza } from "../features/cart/cartService.js";
import { clearError } from "../features/cart/cartSlice.js";

import IngredientRow from "../components/IngredientRow";
import Loader from "../components/Loader";

const BuildPizzaPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ingredients, loading } = useSelector((state) => state.ingredients);
  const { items: cartItems, error: cartError } = useSelector(
    (state) => state.cart
  );

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [localError, setLocalError] = useState("");

  
  const isPizzaInCart = cartItems && cartItems.length > 0;

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

 
  const totalCost = selectedIngredients.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const handleIngredientChange = (ingredient) => {
    
    if (!isPizzaInCart) {
      setLocalError(
        "Please add a pizza to your cart first before selecting toppings."
      );
      return;
    }

    setLocalError("");
    setSuccessMsg("");

    const alreadySelected = selectedIngredients.find(
      (item) => item._id === ingredient._id
    );

    if (alreadySelected) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item._id !== ingredient._id)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleBuildPizza = () => {
    setLocalError("");
    setSuccessMsg("");

    
    if (!isPizzaInCart) {
      setLocalError(
        "Please add a pizza to your cart first before adding toppings."
      );
      return;
    }

    dispatch(buildCustomPizza(selectedIngredients))
      .unwrap()
      .then(() => {
        navigate("/cart");           
      })
      .catch((err) => {
        setLocalError(err);
      });
  };

  if (loading) return <Loader text="Loading ingredients..." />;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      
      <p className="build-subtitle">
        Pizzeria now gives you options to build your own pizza. Customize your
        pizza by choosing ingredients from the list given below
      </p>

    
      {(localError || cartError) && (
        <div className="alert alert-warning py-2">
          {localError || cartError}
        </div>
      )}

      {successMsg && (
        <div className="alert alert-success py-2">{successMsg}</div>
      )}

      
      <table className="ingredient-table">
        <tbody>
          {ingredients.map((ingredient) => {
            const isChecked = selectedIngredients.some(
              (item) => item._id === ingredient._id
            );

            return (
              <IngredientRow
                key={ingredient._id}
                ingredient={ingredient}
                checked={isChecked}
                onChange={handleIngredientChange}
                disabled={!isPizzaInCart}
              />
            );
          })}
        </tbody>
      </table>

     
      <p className="total-cost-text">Total Cost : {totalCost}</p>

      
      <div className="text-center">
        <button
          className="build-pizza-btn"
          onClick={handleBuildPizza}
          disabled={!isPizzaInCart}
        >
          Build Ur Pizza
        </button>
      </div>
    </div>
  );
};

export default BuildPizzaPage;