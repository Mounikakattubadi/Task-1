import React from "react";
import "./GrowCollection.css";

import growBack from "./images/grow1.jpg";
import growMain from "./images/grow2.jpg";
import growSmall from "./images/grow3.jpg";

// wave background images
import brown from "./images/brown.png";
import lightyellow from "./images/lightyellow.png";
import yellow from "./images/yellow.png";

// icons from react-icons
import {
  FiSearch,
  FiTarget,
  FiMessageCircle,
  FiStar,
  FiCheck,
} from "react-icons/fi";

const GrowCollection = () => {
  return (
    <section className="grow-section">
      {/* BACKGROUND FLOWS (BEHIND EVERYTHING) */}
      <div className="grow-bg-flow">
        <img src={yellow} alt="" className="flow-img flow-yellow" />
        <img src={lightyellow} alt="" className="flow-img flow-lightyellow" />
        <img src={brown} alt="" className="flow-img flow-brown" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="grow-container">
        {/* HEADER */}
        <div className="grow-header">
          <h2>Grow your collection</h2>
          <p>
            Eros egestas pretium eget fermentum. Sit ornare facilisis non
            faucibus sit amet nec quam vitae. Et urna, elit massa amet
            pellentesque et. Nisi, sed magna eu lectus placerat.
          </p>
        </div>

        <div className="grow-main">
          {/* LEFT SIDEBAR */}
          <aside className="grow-sidebar">
            <button className="grow-search-pill">
              <FiSearch className="grow-search-icon" />
              <span>Bibendum tellus</span>
            </button>

            <button className="grow-item active">
              <span className="grow-item-icon">
                <FiTarget />
              </span>
              Cras eget
            </button>

            <button className="grow-item">
              <span className="grow-item-icon">
                <FiMessageCircle />
              </span>
              Dolor pharetra
            </button>

            <button className="grow-item">
              <span className="grow-item-icon">
                <FiStar />
              </span>
              Amet, fringilla
            </button>

            <button className="grow-item">
              <span className="grow-item-icon">
                <FiTarget />
              </span>
              Amet nibh
            </button>

            <button className="grow-item">
              <span className="grow-item-icon">
                <FiCheck />
              </span>
              Sed velit
            </button>
          </aside>

          {/* RIGHT VISUAL AREA */}
          <div className="grow-visual">
            {/* back window */}
            <div className="window window-back">
              <div className="window-bar">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <img src={growBack} alt="Background sneakers" />
            </div>

            {/* front window */}
            <div className="window window-front">
              <div className="window-bar">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <img src={growMain} alt="Main sneakers" />

              <div className="window-small">
                <img src={growSmall} alt="Sneaker detail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowCollection;
