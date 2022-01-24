import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./../pages/home/home";
import Cart from "./../cart/cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
