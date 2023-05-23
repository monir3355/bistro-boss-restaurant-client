import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/share/Footer";
import Header from "../pages/share/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
