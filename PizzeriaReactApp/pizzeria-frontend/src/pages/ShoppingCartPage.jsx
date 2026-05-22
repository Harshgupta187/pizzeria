import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCartItems, clearCart } from "../features/cart/cartService.js";
import CartItem from "../components/CartItem.jsx";
import Loader from "../components/Loader.jsx";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();

  const { items, totalAmount, totalItems, loading, error } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (loading) return <Loader text="Loading cart..." />;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e8e8",
          padding: "24px",
        }}
      >
        <h4 className="mb-4" style={{ fontWeight: 700 }}>
          Shopping Cart
        </h4>

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

     
        {items.length === 0 ? (
          <div className="text-center py-5">
            <p style={{ fontSize: "1.1rem", color: "#777" }}>
              Your cart is empty.
            </p>
            <Link to="/order-pizza" className="btn btn-warning mt-2">
              Order a Pizza
            </Link>
          </div>
        ) : (
          <>
           
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="cart-table">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Pizza</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item, index) => (
                    <CartItem
                      key={item._id || index}
                      item={item}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>

         
            <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-3">
              <div>
                <p className="cart-total mb-1">
                  Total Items: {totalItems}
                </p>
                <p className="cart-total mb-0">
                  Total Amount: ₹{totalAmount}
                </p>
              </div>

              <div className="d-flex gap-2">
                <Link to="/order-pizza" className="btn btn-warning">
                  Add More
                </Link>

                <button
                  className="btn btn-outline-danger"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;