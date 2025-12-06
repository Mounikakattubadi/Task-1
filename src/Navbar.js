import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="nav-wrapper">
      
      <div className="nav-diagonal" />

      <div className="nav-inner container">
        <div className="nav-logo">Collers</div>

       
        <nav className="nav-menu nav-menu-desktop">
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#login" className="nav-login">
            Log In
          </a>
          <button className="nav-cta">Sign up now</button>
        </nav>

     
        <button
          className={`nav-toggle ${isOpen ? "nav-toggle-open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

  
      <nav
        className={`nav-menu-mobile ${
          isOpen ? "nav-menu-mobile-open" : ""
        }`}
      >
        <a href="#products" onClick={handleLinkClick}>
          Products
        </a>
        <a href="#solutions" onClick={handleLinkClick}>
          Solutions
        </a>
        <a href="#pricing" onClick={handleLinkClick}>
          Pricing
        </a>
        <a href="#resources" onClick={handleLinkClick}>
          Resources
        </a>

        <div className="nav-mobile-actions">
          <a href="#login" className="nav-login" onClick={handleLinkClick}>
            Log In
          </a>
          <button className="nav-cta" onClick={handleLinkClick}>
            Sign up now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
