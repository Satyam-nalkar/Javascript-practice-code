import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="mt-10 flex justify-center gap-7">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-200" : "",
                e.isActive ? "font-bold" : "",  
        ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>
      <NavLink
        style={(e) => {
          return { color: e.isActive ? "#FCA5A5" : "" };
        }}
        to="/User"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-200" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/About"
      >
        About
      </NavLink>
    </nav>
  );
}
export default Nav;
