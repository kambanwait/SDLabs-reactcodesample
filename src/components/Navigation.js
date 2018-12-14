import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/"><img src="" width="112" height="28" alt="Recipe box Logo" /></a>
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Admin</a>
      </div>
    </nav>
  );
}

export default Navigation;