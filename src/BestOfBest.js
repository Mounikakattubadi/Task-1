  import React from "react";
  import "./BestOfBest.css";

  import best1 from "./images/best1.jpg";
  import best2 from "./images/best2.jpg";
  import best3 from "./images/best3.jpg";

const cards = [
  // 1: left-side pill
  { id: 1, image: best1, blobs: ["card1-left"] },

  // 2: blue box at top-left corner
  { id: 2, image: best2, blobs: ["card2-blue-corner"] },

  // 3: green right, purple bottom
  { id: 3, image: best3, blobs: ["card3-green-right", "card3-purple-bottom"] },
];

  const BestOfBest = () => {
    return (
      <section className="best-section">
        <div className="best container">
          <div className="best-header">
            <h2>The best of the best</h2>
            <button className="best-signup-btn">Sign up now</button>
          </div>

          <div className="best-cards">
            {cards.map((card) => (
              <article className="best-card" key={card.id}>
                {/* Render all blob backgrounds */}
                {card.blobs.map((blob, index) => (
                  <div key={index} className={`best-card-blob ${blob}`} />
                ))}

                <div className="best-card-inner">
                  <div className="best-card-image-wrapper">
                    <img
                      src={card.image}
                      alt="Sneaker"
                      className="best-card-image"
                    />
                  </div>

                  <div className="best-card-body">
                    <h3>Title</h3>
                    <p>
                      Egestas elit dui scelerisque ut eu purus aliquam vitae
                      habitasse.
                    </p>
                    <button className="best-buy-btn">
                      <span className="best-buy-icon">🛒</span>
                      Buy Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default BestOfBest;
