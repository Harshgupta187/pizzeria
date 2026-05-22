import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPizzas } from "../features/pizzas/pizzaService.js";
import PizzaCard from "../components/PizzaCard";
import Loader from "../components/Loader";

const OrderPizzaPage = () => {
  const dispatch = useDispatch();

  const { pizzas, loading, error } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (loading) return <Loader text="Loading pizzas..." />;

  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div className="row">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default OrderPizzaPage;