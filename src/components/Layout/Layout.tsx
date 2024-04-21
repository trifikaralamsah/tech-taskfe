import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <React.Fragment>
      {location.pathname !== "/login" && <Navbar />}
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
