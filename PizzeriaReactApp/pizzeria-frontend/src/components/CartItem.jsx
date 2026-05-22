import { useDispatch } from "react-redux";
import { updateCartQuantity, removeCartItem } from "../features/cart/cartService";

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='55'%3E%3Crect width='70' height='55' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='10' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const pizzaName = item.pizza?.name || "Pizza";
  const pizzaImage = item.pizza?.image || null;

  const handleIncrease = () => {
    dispatch(updateCartQuantity({ itemId: item._id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity <= 1) return;
    dispatch(updateCartQuantity({ itemId: item._id, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeCartItem(item._id));
  };

  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <img
          src={pizzaImage || FALLBACK_IMG}
          alt={pizzaName}
          style={{ width: "70px", height: "55px", objectFit: "cover", borderRadius: "4px" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_IMG;
          }}
        />
      </td>

      <td style={{ fontWeight: 600 }}>{pizzaName}</td>

      <td>
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
          >
            −
          </button>

          <span style={{ fontWeight: 600, minWidth: "24px", textAlign: "center" }}>
            {item.quantity}
          </span>

          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </td>

      <td style={{ fontWeight: 600 }}>₹{item.price}</td>

      <td>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;