import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar p-0 mt-4">
      <div className="flex-1">
        <a className="logo" to='/'><span>R</span>ks Team<span>.</span></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li>
           <NavLink>Home</NavLink>
        </li>
        </ul>
      </div>
    </div>
  );
}
