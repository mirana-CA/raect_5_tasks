import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Tabs</NavLink>
          </li>
          <li>
            <NavLink to="drawer">Drawer</NavLink>
          </li>
          <li>
            <NavLink to="collapse">Collapse</NavLink>
          </li>
          <li>
            <NavLink to="coinflip">Coin Flip</NavLink>
          </li>
          <li>
            <NavLink to="bmicalculator">Bmi Calculator</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
