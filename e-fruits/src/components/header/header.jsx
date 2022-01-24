import React from "react";
import { Link } from "react-router-dom";
import "./styleHeader.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="link-home">
          <h1 className="logo">
            e-<span>Fruits</span>
          </h1>
        </Link>
        <nav className="menu-container">
          <ul className="menu">
            <li>
              <Link to="/" className="cart-link">
                <p className="cart-text">Products</p>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="cart-link">
                <p className="cart-text">My cart</p>
                <i className="bx bx-cart"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="background"></div>
    </header>
  );
};

export default Header;
