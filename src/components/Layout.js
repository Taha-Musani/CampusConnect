import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";  // Corrected the import

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
