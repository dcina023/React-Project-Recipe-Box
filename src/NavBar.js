import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Discover</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}
export default NavBar;
