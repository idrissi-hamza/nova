import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../asset/dashboard.svg";
import Add from "../asset/add.svg";

const navLinks = [
  { title: "Dashboard", path: "/", img: Dashboard },
  { title: "New Project", path: "/create", img: Add },
];

const Sidebar = () => {
  return (
    <div className="sidebar relative w-72 min-h-screen  text-white bg-gray-500">
      <div className="sidebare-content fixed w-72 ">
        <div className="user font-bold text-center tracking-wider px-7 py-10  border-b border-gray-50 ">
          <p>user name</p>
        </div>
        <nav className="links mt-20 ml-5 ">
          <ul>
            {navLinks.map((link) => (
              <li className="mt-2">
                <NavLink
                  className={({ isActive }) =>
                    !isActive
                      ? "flex p-2 w-full text-white items-center"
                      : " group flex p-2 w-full text-white items-center bg-gray-400 rounded-l-xl "
                  }
                  key={link.title}
                  to={link.path}
                >
                  <img
                    className="mr-2 invert w-8 h-8"
                    src={link.img}
                  />
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
