import React from "react";
import CardContainer from "../../components/cardContainer/cardContainer";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./style.scss";

const Home = () => {
  return (
    <>
      <Header />
      <CardContainer />
      <Footer />
    </>
  );
};

export default Home;
