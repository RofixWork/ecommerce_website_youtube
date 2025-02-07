import React from "react";
import { CiImageOn } from "react-icons/ci";

const ProductSkeleton = () => {
  return (
    <div className="relative border border-gray-200 shadow-xl rounded-md h-auto">
      <div className="bg-gray-300 animate-pulse  w-[45px] h-[45px] rounded-full absolute -top-3 -right-2"></div>
      <div className="animate-pulse h-[200px] rounded-md border-b border-gray-200 bg-gray-300 flex items-center justify-center">
        <CiImageOn fontSize={40} className="text-white" />
      </div>
      <div className="px-3 py-5">
        <div className="h-3 bg-gray-300 w-full rounded-full animate-pulse"></div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="h-3 bg-gray-300 flex-1 rounded-full animate-pulse"></div>
          <div className="h-3 bg-gray-300 w-[100px] rounded-full animate-pulse"></div>
        </div>
        <div className="mt-5 flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-[80px] bg-gray-300  rounded-full animate-pulse"></div>
            <div className="h-3 w-[80px]  bg-gray-300 rounded-full animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-9 w-9 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
