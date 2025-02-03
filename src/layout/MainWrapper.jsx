import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import { Outlet } from "react-router";
const MainWrapper = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainWrapper;
