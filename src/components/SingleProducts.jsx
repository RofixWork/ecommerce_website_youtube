import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Rating } from "flowbite-react";
import applyDiscount from "../utils/calculate_discount";
import { Link } from "react-router";
export const SingleProducts = ({
  id,
  title,
  price,
  discountPercentage,
  rating,
  thumbnail,
}) => {
  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* discount */}
      <span className="bg-red-100 text-red-800 text-xs font-semibold w-[45px] h-[45px] flex items-center justify-center rounded-full dark:bg-red-200 dark:text-red-800 absolute -top-3 -right-2">
        {discountPercentage}%
      </span>
      <Link to={`/product/${id}/details/`}>
        <img
          className="rounded-t-lg"
          src={thumbnail}
          loading="lazy"
          alt={title}
        />
      </Link>
      <div className="px-5 pb-5 pt-2">
        <Link to={`/product/${id}/details/`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Rating>
              {Array.from(
                { length: Math.ceil(rating) },
                (_, idx) => idx + 1
              ).map((item) => {
                return <Rating.Star filled={true} key={item} />;
              })}
            </Rating>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-1">
            <span className="text-lg font-bold text-gray-400 dark:text-white line-through">
              ${price}
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {applyDiscount(price, discountPercentage)}
            </span>
          </div>
          <div>
            <button className="mr-1 btn-product-action text-white bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <FaHeart />
            </button>
            <button className="btn-product-action bg-blue-700 hover:bg-blue-800 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
