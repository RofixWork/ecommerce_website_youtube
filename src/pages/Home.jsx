import React from "react";
import MainTitle from "../components/MainTitle";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <>
      <PopularProducts />
      <MainTitle title="Popular Categories" link="/categories" />
    </>
  );
};

export default Home;
