import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";

const Navbar = () => {
  return (
    <div className="w-full py-2 px-2 mb-2 bg-gray-100">
      <ul className="flex  mx-auto items-center justify-end ">
        <li className="flex font-bold tracking-wider text-emerald-600/50 items-center mr-auto text-sm">
          <img src={Logo} alt="logo" className="w-9 h-9" />
          <span>nova</span>
        </li>
        <li className="text-gray-600 mr-5">
          <Link to="/login">Login</Link>
        </li>
        <li className="text-gray-600 mr-5">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="text-gray-600 mr-5">
          <button className="btn">Logout</button>
        </li>
        {/* <Link to='/'>hi</Link> */}
      </ul>
    </div>
  );
};

export default Navbar;
