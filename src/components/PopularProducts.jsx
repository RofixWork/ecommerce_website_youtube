import React from "react";
import { SingleProducts } from "./SingleProducts";
import MainTitle from "./MainTitle";
import useAxios from "../hooks/useAxios";
const PopularProducts = () => {
  const { data, isLoading, error } = useAxios(
    "products?sortBy=rating&order=desc&limit=10"
  );

  if (isLoading) {
    return "Loding...";
  }
  if (error) {
    return `Error fetching data: ${error}`;
  }
  return (
    <section className="py-4">
      <MainTitle title="Popular Products" link="/products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.products?.length > 1 &&
          data?.products?.map((product) => {
            return <SingleProducts key={product?.id} {...product} />;
          })}
      </div>
    </section>
  );
};

export default PopularProducts;
