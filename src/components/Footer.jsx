import React from "react";
import "./Footer.css";
import logo from "../assets/j-logo.png"; // Make sure this path is correct
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <p>COCKTAIL RECIPES</p>
          <p>OUR STORY</p>
          <p>VISIT US</p>
          <p>SHOP</p>
          <p>NEWS & EVENTS</p>
          <p>PRESSROOM</p>
          <p>TENNESSEE SQUIRE</p>
          <p>SUBSCRIBE</p>
        </div>

        <div className="footer-col">
          <p className="footer-head">OUR PRODUCTS</p>
          <p>Old No. 7</p>
          <p>Flavors</p>
          <p>Bonded Series</p>
          <p>Single Barrel Collection</p>
          <p>Premiums & Super Premiums</p>
        </div>

        <div className="footer-col">
          <p>On-the-Go</p>
          <p>Jack x McLaren</p>
          <p>Limited Editions</p>
          <p>Historical Collection</p>
          <p>Explore All Products</p>
        </div>

        <div className="footer-col footer-right">
          <img src={logo} alt="Jack Daniel's" className="footer-logo" />
          <p className="footer-tagline">Live Freely. Drink Responsibly.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <PiXLogo />
            <FaYoutube />
            <FaPinterestP />
          </div>
          <div className="footer-links">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Sustainability</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Nutrition</p>
            <p>Pressroom</p>
            <p>Accessibility</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
