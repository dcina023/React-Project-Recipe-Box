import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Recipes</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/discover">Discover</NavLink>
    </nav>
  );
}
export default NavBar;
