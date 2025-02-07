import React from "react";
import useAxios from "../hooks/useAxios";
import { SingleProducts } from "../components/SingleProducts";
import MainTitle from "../components/MainTitle";
import { Helmet } from "react-helmet-async";
import RenderProductSkeleton from "../components/RenderProductSkeleton";
import { motion } from "motion/react";
const Products = () => {
  const { data, isLoading, error } = useAxios(
    "products?sortBy=rating&order=desc&limit=30"
  );

  if (error) {
    return `Error fetching data: ${error}`;
  }
  return (
    <>
      {/* title anddescription */}
      <Helmet>
        <title>All Products</title>
        <meta
          name="description"
          content="this page containes all store products..."
        />
      </Helmet>
      <section className="py-4">
        <MainTitle title="Products" showButton={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.products?.length > 1 ? (
            data?.products?.map((product) => {
              return <SingleProducts key={product?.id} {...product} />;
            })
          ) : (
            <RenderProductSkeleton />
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
