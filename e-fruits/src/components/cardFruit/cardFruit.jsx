import React from "react";
import { useCart } from "react-use-cart";
import "./styleCardFruit.scss";
import DataFruits from "../../data/dataFruits";
import fruit from "../../assets/fruit.png";

const ItemCard = (props) => {
  const { addItem } = useCart();

  const showDeatailsFruit = (id) => {
    const [fruta] = DataFruits.productData.filter((e) => e.id == id);
    alert(`-${fruta.name} Nutritions: 
    \n    Carbohydrates: ${fruta.nutritions.carbohydrates}
    \n    Protein: ${fruta.nutritions.protein}
    \n    Fat: ${fruta.nutritions.fat}
    \n    Calories: ${fruta.nutritions.calories}
    \n    Sugar: ${fruta.nutritions.sugar}`);
  };

  return (
    <div className="card">
      <img src={fruit} className="img-fruit" />

      <h5 className="fruit-name-price">
        {props.name} - $ {props.price}
      </h5>
      <button
        className="info-fruit"
        onClick={() => showDeatailsFruit(props.id)}
      >
        <i className="bx bx-info-circle"></i>
      </button>
      <button className="add-button" onClick={() => addItem(props.fruit)}>
        <span className="text-button">
          <i className="bx bxs-cart-add"></i> Add to cart
        </span>
      </button>
    </div>
  );
};

export default ItemCard;
