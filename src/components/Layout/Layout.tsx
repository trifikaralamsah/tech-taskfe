import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h1>Layout</h1>
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
