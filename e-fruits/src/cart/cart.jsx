import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import empty from "../assets/empty.png";
import HeaderCart from "./headerCart/headerCart";
import "./styleCart.scss";
import fruitExample from "../assets/fruit.png";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div className="container-empty-cart">
        <HeaderCart />
        <div className="info-empty">
          <img src={empty} alt="empty cart" className="img-empty" />
          <h1 className="text-center">Your cart is empty</h1>
          <Link to="/" className="button-back">
            Back to Home
          </Link>
        </div>
      </div>
    );

  return (
    <div className="cart-container-global">
      <HeaderCart />
      <div className="container-total">
        <h2>Total Price: $ {cartTotal}</h2>
        <div className="buttons-result">
          <button className="button-clear-cart" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="button-buy-now">Buy Now</button>
        </div>
      </div>
      <div className="container-cart-cards">
        <h5>
          Cart ({totalUniqueItems}) total Items ({totalItems})
        </h5>
        <table className="table-cards-cart">
          <tbody>
            {items.map((fruit, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={fruitExample} />
                  </td>
                  <td>{fruit.name}</td>
                  <td>$ {fruit.price}</td>
                  <td>Quantity: ({fruit.quantity})</td>
                  <td>
                    <button
                      className="button-decrement"
                      onClick={() =>
                        updateItemQuantity(fruit.id, fruit.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="button-increment"
                      onClick={() =>
                        updateItemQuantity(fruit.id, fruit.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="button-remove"
                      onClick={() => removeItem(fruit.id)}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
