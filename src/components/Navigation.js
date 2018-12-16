import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/"><h1 className="title is-1">Recipe box</h1></a>
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Admin</a>
      </div>
    </nav>
  );
}

export default Navigation;