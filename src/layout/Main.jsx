import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/share/Footer";
import Header from "../pages/share/Header";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter || <Header />}
      <div>
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
