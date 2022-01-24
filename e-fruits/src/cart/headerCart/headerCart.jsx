import React from "react";
import { Link } from "react-router-dom";
import "./styleHeaderCart.scss";

const HeaderCart = () => {
  return (
    <header className="header-cart">
      <Link to="/" className="link-home-cart">
        <h1 className="logo-cart">
          e-<span>Fruits</span>
        </h1>
      </Link>
      <nav className="menu-container-cart">
        <ul className="menu-cart">
          <li>
            <Link to="/" className="cart-link-cart">
              <p className="cart-text-cart">Products</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderCart;
