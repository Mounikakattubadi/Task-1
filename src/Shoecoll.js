import React from "react";
import "./Shoecoll.css";

import mapImg from "./images/map.png";   // world map image
import shoeImg from "./images/shoe.jpg"; // shoe card image

function Shoecoll() {
  return (
    <section className="shoe-coll-section">
      {/* background map */}
      <div className="shoe-coll-bg">
        <img src={mapImg} alt="World map" className="shoe-map-img" />
      </div>

      {/* foreground content */}
      <div className="shoe-coll-inner">
        {/* floating card top-left */}
        <div className="shoe-floating-card">
          <div className="shoe-card-img">
            <img src={shoeImg} alt="Collected shoe" />
          </div>
          <p className="shoe-card-text">
            <span className="shoe-card-name">Emma Simpson</span> collected one
            pair of Cool Shoes.
          </p>
        </div>

        {/* center stats */}
        <div className="shoe-stat">
          <p className="shoe-stat-number">11,658,467</p>
          <p className="shoe-stat-label">Shoes Collected</p>
        </div>

        {/* glowing dots over map */}
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
