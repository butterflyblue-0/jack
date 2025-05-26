import React from "react";
import "./Navbar.css";
import logo from "../assets/j-logo.png"; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      
      {/* Top Row */}
      <div className="navbar-top">
        <button className="dropdown-toggle">
          🌐 GLOBAL - ENGLISH <span className="arrow">▼</span>
        </button>
        <button className="shop-btn">SHOP</button>
      </div>

      {/* Bottom Row */}
      <div className="navbar-bottom">
        <a href="#" className="nav-link">OUR PRODUCTS</a>
        <a href="#" className="nav-link active">COCKTAILS</a>
        <a href="#" className="nav-link">OUR STORY</a>

        <div className="nav-center">
          <img src={logo} alt="Jack Daniel's Logo" className="logo" />
        </div>

        <a href="#" className="nav-link">DISTILLERY</a>
        <a href="#" className="nav-link">NEWS & EVENTS</a>
        <a href="#" className="nav-link">SUBSCRIBE</a>
      </div>
    </nav>
  );
};

export default Navbar;
