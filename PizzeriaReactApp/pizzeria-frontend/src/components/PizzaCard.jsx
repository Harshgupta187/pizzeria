import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPizzaToCart } from "../features/cart/cartService";

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='150'%3E%3Crect width='180' height='150' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='13' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

const PizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(
      addPizzaToCart({
        pizzaId: pizza.id,
        quantity: 1,
        extraToppings: [],
      })
    )
      .unwrap()                        
      .then(() => {
        navigate("/build-pizza");      
      })
      .catch((error) => {
        console.error("Failed to add to cart:", error);
      });
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="pizza-card">
        <div className="row g-0">

          <div className="col-8">
            <h3>{pizza.name}</h3>

            <div>
              <span
                className={pizza.type === "veg" ? "veg-indicator" : "nonveg-indicator"}
                title={pizza.type === "veg" ? "Veg" : "Non-Veg"}
              />
            </div>

            <p className="description mt-2">{pizza.description}</p>

            <p className="price">₹{pizza.price}.00</p>

            <p className="mb-1">
              <span className="info-label">Ingredients : </span>
              <span className="info-text">{pizza.ingredients.join(", ")}</span>
            </p>

            <p className="mb-2">
              <span className="info-label">Toppings : </span>
              <span className="info-text">{pizza.topping.join(", ")}</span>
            </p>
          </div>

          <div className="col-4 d-flex flex-column align-items-center justify-content-between">
            <img
              src={pizza.image || FALLBACK_IMG}
              alt={pizza.name}
              className="pizza-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = FALLBACK_IMG;
              }}
            />

            <button
              className="btn btn-warning mt-3 w-100"
              style={{ fontWeight: 600, fontSize: "0.85rem" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PizzaCard;