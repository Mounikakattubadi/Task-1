import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      {/* Top-right diagonal shape */}
      <div className="nav-diagonal"></div>

      <div className="nav-inner container">
        <div className="nav-logo">Collers</div>

        <nav className="nav-menu">
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#login" className="nav-login">Log In</a>
          <button className="nav-cta">Sign up now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
