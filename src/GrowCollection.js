import React from "react";
import "./GrowCollection.css";

import grow1 from "./images/grow1.jpg";
import grow2 from "./images/grow2.jpg";
import grow3 from "./images/grow3.jpg";
import grow4 from "./images/grow4.jpg";

const GrowCollection = () => {
  return (
    <section className="grow-section" id="solutions">
      <div className="grow-top container">
        <div className="grow-header">
          <h2>Grow your collection</h2>
          <p>
            Eros egestas pretium eget fermentum. Sit ornare facilisis non
            faucibus sit amet nec quam vitae. Et urna, elit massa amet
            pellentesque et. Nisi, sed magna eu lectus placerat.
          </p>
        </div>

        <div className="grow-main">
          {/* left sidebar */}
          <aside className="grow-sidebar">
            <button className="grow-option active">
              <span className="grow-icon">☰</span>
              Discover value
            </button>
            <button className="grow-option">
              <span className="grow-icon">📦</span>
              Grow asset
            </button>
            <button className="grow-option">
              <span className="grow-icon">💬</span>
              Dolor pharetra
            </button>
            <button className="grow-option">
              <span className="grow-icon">⭐</span>
              Arnet fringilla
            </button>
            <button className="grow-option">
              <span className="grow-icon">✔</span>
              Sed velit
            </button>
          </aside>

          {/* right layered windows */}
          <div className="grow-visual">
            <div className="grow-window grow-window-back">
              <img src={grow1} alt="Collection background" />
            </div>

            <div className="grow-window grow-window-front">
              <img src={grow2} alt="Collection main" />

              <div className="grow-window-small">
                <img src={grow3} alt="Detail" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* brown stats / map part */}
      <div className="grow-bottom">
        <div className="grow-bottom-inner container">
          <div className="grow-map-area">
            <div className="grow-floating-card">
              <div className="grow-floating-image">
                <img src={grow4} alt="Sneaker closeup" />
              </div>
              <div className="grow-floating-text">
                <p>Curate sneakers around the world.</p>
              </div>
            </div>

            {/* fake world map w/ dots */}
            <div className="grow-map-dots">
              <span className="grow-dot dot-1" />
              <span className="grow-dot dot-2" />
              <span className="grow-dot dot-3" />
              <span className="grow-dot dot-4" />
              <span className="grow-dot dot-5" />
            </div>

            <div className="grow-stat">
              <p className="grow-stat-number">11,658,467</p>
              <p className="grow-stat-label">Shoes Collected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowCollection;
