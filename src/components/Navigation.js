import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar container is-fluid level is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item header-logo" to="/">
          <img src="/images/cook.svg" width="112" height="28" />
          <p className="title is-4">Recipe Box</p>
        </NavLink>

        <NavLink className="navbar-item" to="/">Home</NavLink>
        <NavLink className="navbar-item" to="/admin">Admin</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;