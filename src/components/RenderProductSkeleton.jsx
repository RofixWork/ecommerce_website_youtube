import ProductSkeleton from "./ProductSkeleton";

const RenderProductSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((elem) => {
        return <ProductSkeleton key={elem} />;
      })}
    </>
  );
};

export default RenderProductSkeleton;
