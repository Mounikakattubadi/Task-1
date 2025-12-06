import React from "react";
import "./Footer.css";
import {
  FaApple,
  FaGooglePlay,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="footer-section" id="resources">
      <div className="footer container">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#pricing">Pricing</a>
            <a href="#solutions">Overview</a>
            <a href="#products">Mobile</a>
            <a href="#accessibility">Accessibility</a>
            <a href="#play">Play</a>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <a href="#">Brainstorming</a>
            <a href="#">Ideation</a>
            <a href="#">Wireframing</a>
            <a href="#">Research</a>
            <a href="#">Design</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">Developers</a>
            <a href="#">Documentation</a>
            <a href="#">Integrations</a>
            <a href="#">Reports</a>
          </div>

         
          <div className="footer-col footer-col-right">
            <h4>Get the App</h4>

            
            <button className="store-badge-icon">
              <span className="store-badge-logo">
                <FaApple />
              </span>
              <span className="store-badge-text">
                <span className="store-badge-small">Download on the</span>
                <span className="store-badge-big">App Store</span>
              </span>
            </button>

            
            <button className="store-badge-icon">
              <span className="store-badge-logo">
                <SiGoogleplay />
              </span>

              <span className="store-badge-text">
                <span className="store-badge-small">GET IT ON</span>
                <span className="store-badge-big">Google Play</span>
              </span>
            </button>

            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social-row">
              <FaYoutube className="social-icon" />
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedinIn className="social-icon" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Collers © 2023. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
            <a href="#">EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
