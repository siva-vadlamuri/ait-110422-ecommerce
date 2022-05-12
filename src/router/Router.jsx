import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/products/Products";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<h3>Product Detail Page</h3>} />
    </Routes>
  );
}

export default Router;
