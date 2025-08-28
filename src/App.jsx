// src/App.tsx
import { Carousel } from "flowbite-react";
import Home from "@/pages/Home";
import Layout from "@/Layout";
import ShoppingCart from "@/pages/ShoppingCart";
import ProductOverview from "@/pages/ProductOverview";
import Checkout from "@/pages/Checkout"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="product" element={<ProductOverview />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}
