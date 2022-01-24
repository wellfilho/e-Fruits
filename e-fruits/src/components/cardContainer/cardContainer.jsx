import ItemCard from "../cardFruit/cardFruit";
import DataFruits from "./../../data/dataFruits";
import "./styleCardContainer.scss";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const { data } = await api.get("/all");
      console.log(data);
      setData(data);
    } catch {
      // alert(
      //   "API response error, we will use the internal data to show the items."
      // );
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (data.length == "") {
    return (
      <main>
        <h1 className="">All Fruits</h1>
        <div className="container-cards">
          {DataFruits.productData.map((fruit, index) => {
            return (
              <ItemCard
                imgURL={fruit.imgURL}
                name={fruit.name}
                price={fruit.price}
                id={fruit.id}
                key={index}
                fruit={fruit}
              />
            );
          })}
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <h1 className="">All Fruits</h1>
        <div className="container-cards">
          {data.map((fruit, index) => {
            return (
              <ItemCard
                imgURL={fruit.imgURL}
                name={fruit.name}
                price={(fruit.price = Math.floor(Math.random() * 10) + 1)}
                id={fruit.id}
                key={index}
                fruit={fruit}
              />
            );
          })}
        </div>
      </main>
    );
  }
};

export default CardContainer;
