import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="title is-1">Recipe box</h1>

        <NavLink className="navbar-item" to="/">Home</NavLink>
        <NavLink className="navbar-item" to="/admin">Admin</NavLink>

      </div>
    </nav>
  );
}

export default Navigation;