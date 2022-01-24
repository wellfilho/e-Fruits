import React from "react";
import { CartProvider } from "react-use-cart";
import Router from "./routes/router";

function App() {
  return (
    <>
      <CartProvider>
        <Router />
      </CartProvider>
    </>
  );
}

export default App;
