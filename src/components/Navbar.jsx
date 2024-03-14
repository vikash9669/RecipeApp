import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className=" "> */}
        <nav className="navbar fixed top-0 justify-around bg-orange-400 ">
          <div className="flex-1 mx-8 align-center">
            <Link to={"/"} className="btn btn-ghost text-xl flex"><h2 className="text-3xl">Food</h2></Link>
            <span className="">The Recipe App</span>
          </div>
          <div className="flex-none mx-8">
            <Sidebar  />
          </div>
        </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;
