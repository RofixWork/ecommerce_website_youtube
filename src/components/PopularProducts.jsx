import React from "react";
import { SingleProducts } from "./SingleProducts";
import MainTitle from "./MainTitle";
const PopularProducts = () => {
  return (
    <section className="py-4">
      <MainTitle title="Popular Products" link="/products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((product) => {
          return <SingleProducts key={product} />;
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
