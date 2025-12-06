import React from "react";
import "./Hero.css";
import shoeImg from "./images/shoe1.png"; 
import { FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero-section" id="products">
      
      <div className="hero-bg-diagonal" />

      <div className="hero container">
        
        <div className="hero-text">
          <h1>Collectible Sneakers</h1>

          <p className="hero-subtext">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>

          <div className="hero-actions">
            <button className="hero-btn-outline">Sign up now</button>

            <button className="hero-btn-link">
              <span className="hero-play-circle">
                <FiPlay />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        
        <div className="hero-image-container">
          <div className="hero-yellow-square" />
          <img
            src={shoeImg}
            alt="Sneaker"
            className="hero-shoe-img"
          />
        </div>
      </div>

      
      <div className="hero-features container" style={{ marginTop: "8%" }}>
        <div className="hero-feature">
          <div className="hero-feature-icon blue" />
          <h3>Nibh viverra</h3>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div className="hero-feature">
          <div className="hero-feature-icon green" />
          <h3>Cursus amet</h3>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div className="hero-feature">
          <div className="hero-feature-icon purple" />
          <h3>Ipsum fermentum</h3>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
