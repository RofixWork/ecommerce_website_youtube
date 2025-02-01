import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import { Outlet } from "react-router";
const MainWrapper = () => {
  return (
    <>
      <Header />
      <main className="my-5 bg-red-500">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainWrapper;
