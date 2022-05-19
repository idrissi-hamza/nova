import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from '../asset/dashboard.svg'
import Add from '../asset/add.svg'

const navLinks = [
  { title: "Dashboard", path: "/", img: Dashboard },
  { title: "New Project", path: "/create", img: Add },
];

const Sidebar = () => {
  return (
    <div
      className="sidebar w-72  min-h-screen relative text-white bg-red-500
    "
    >
      <div className="sidebare-content fixed ">
        <div className="user font-bold text-center tracking-wider px-7 py-10  border-b-2 border-gray-400 ">
          <p>user name</p>
        </div>
        <nav className="links">
          <ul>
            {navLinks.map((link) => (
              <li>
                <NavLink key={link.title} to={link.path}>
                  <img src={link.img} />
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
