import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import OrderPizzaPage from "../pages/OrderPizzaPage";
import BuildPizzaPage from "../pages/BuildPizzaPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="order-pizza" element={<OrderPizzaPage />} />

        <Route path="build-pizza" element={<BuildPizzaPage />} />

        <Route path="cart" element={<ShoppingCartPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;