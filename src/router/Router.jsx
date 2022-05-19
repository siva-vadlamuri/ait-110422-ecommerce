import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Product from "../components/products/Product";
import Products from "../components/products/Products";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Router;
