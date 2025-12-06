import React from "react";
import "./Shoecoll.css";

import mapImg from "./images/map.png";   
import shoeImg from "./images/shoe.jpg";

function Shoecoll() {
  return (
    <section className="shoe-coll-section">
      
      <div className="shoe-coll-bg">
        <img src={mapImg} alt="World map" className="shoe-map-img" />
      </div>

      
      <div className="shoe-coll-inner">
        
        <div className="shoe-floating-card">
          <div className="shoe-card-img">
            <img src={shoeImg} alt="Collected shoe" />
          </div>
          <p className="shoe-card-text">
            <span className="shoe-card-name">Emma Simpson</span> collected one
            pair of Cool Shoes.
          </p>
        </div>

        
        <div className="shoe-stat">
          <p className="shoe-stat-number">11,658,467</p>
          <p className="shoe-stat-label">Shoes Collected</p>
        </div>

       
        <div className="shoe-dots">
          <span className="shoe-dot dot-1" />
          <span className="shoe-dot dot-2" />
          <span className="shoe-dot dot-3" />
          <span className="shoe-dot dot-4" />
          <span className="shoe-dot dot-5" />
          <span className="shoe-dot dot-6" />
        </div>
      </div>
    </section>
  );
}

export default Shoecoll;
