import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/logo.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="w-full py-2 px-2 bg-gray-100 border-b sticky top-0   ">
      <ul className="flex  mx-auto items-center justify-end ">
        <li className="flex font-bold tracking-wider text-emerald-600/50 items-center mr-auto text-sm">
          <img src={Logo} alt="logo" className="w-9 h-9" />
          <span>nova</span>
        </li>
        {!user && (
          <li className="text-gray-600 mr-5">
            <Link to="/login">Login</Link>
          </li>
        )}
        {!user && (
          <li className="text-gray-600 mr-5">
            <Link to="/signup">Signup</Link>
          </li>
        )}
        {user && (
          <li className="text-gray-600 mr-5">
            {!isPending && <button onClick={logout}>Logout</button>}
            {isPending && <button disabled>Logging out...</button>}
          </li>
        )}
        {/* <Link to='/'>hi</Link> */}
      </ul>
    </div>
  );
};

export default Navbar;
