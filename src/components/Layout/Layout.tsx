import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      {pathname !== "/login" && pathname !== "/register" && <Navbar />}
      <Outlet />
      {pathname !== "/login" && pathname !== "/register" && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
