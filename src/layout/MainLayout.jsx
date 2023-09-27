import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="py-10 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
