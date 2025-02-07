import React from "react";
import MainTitle from "../components/MainTitle";
import PopularProducts from "../components/PopularProducts";
import ProductSkeleton from "../components/ProductSkeleton";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Marketplace</title>
        <meta name="description" content="home page..." />
      </Helmet>
      <PopularProducts />
      <MainTitle title="Popular Categories" link="/categories" />
    </>
  );
};

export default Home;
