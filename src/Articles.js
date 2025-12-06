import React from "react";
import "./Articles.css";

import art1 from "./images/art1.jpg";
import art2 from "./images/art2.jpg";
import art3 from "./images/art3.jpg";
import art4 from "./images/art4.jpg";
import art5 from "./images/art5.jpg";
import art6 from "./images/art6.jpg";
import art7 from "./images/art7.jpg";
import art8 from "./images/art8.jpg";

import vector13 from "./images/Vector 13.png"; // background vector for Amazing events

const articleCards = [
  {
    id: 1,
    image: art1,
    title: "Congue velit risus",
    text: "Natoque egestas nam natoque mi quisque pretium. Aenean vestibulum.",
  },
  {
    id: 2,
    image: art2,
    title: "Ull mauris",
    text: "Pretium malesuada fermentum sit laoreet pharetra fermentum id.",
  },
  {
    id: 3,
    image: art3,
    title: "Aliquam tortor nunc",
    text: "Lacus vel iaculis tincidunt sed. Lectus amet sed ut erat.",
  },
  {
    id: 4,
    image: art4,
    title: "Frusce non morbi",
    text: "Neque gravida sed hendrerit praesent pulvinar id aliquet.",
  },
];

const eventCards = [
  {
    id: 1,
    image: art5,
    place: "USA",
    title: "Varius erat diam",
  },
  {
    id: 2,
    image: art6,
    place: "Paris",
    title: "Diam felis tempus",
  },
  {
    id: 3,
    image: art7,
    place: "UK",
    title: "Vel nulla varius",
  },
  {
    id: 4,
    image: art8,
    place: "UAE",
    title: "Arnet tristique a",
  },
];

const Articles = () => {
  return (
    <section className="articles-section" id="pricing">
      {/* ARTICLES TOP (white background) */}
      <div className="articles-top">
        <div className="container">
          <div className="articles-header-row">
            <h2>Articles by Collectors</h2>
            <button className="articles-link-btn">More Articles →</button>
          </div>

          <div className="articles-grid">
            {articleCards.map((card) => (
              <article className="articles-card" key={card.id}>
                <div className="articles-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="articles-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <button className="articles-link-small">
                    Read article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* EVENTS BLOCK (yellow background with vector13 underneath cards) */}
      <div className="events-block">
        {/* background vector under cards */}
        <div className="events-bg">
          <img src={vector13} alt="" />
        </div>

        <div className="container events-container">
          <div className="events-header-row">
            <h2>Amazing events</h2>
            <button className="articles-link-btn">Explore Articles →</button>
          </div>

          <div className="events-grid">
            {eventCards.map((card) => (
              <article className="events-card" key={card.id}>
                <div className="events-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="events-card-body">
                  <div className="events-meta">
                    <span className="events-place">{card.place}</span>
                    <span className="events-tag">New</span>
                  </div>
                  <h3>{card.title}</h3>
                  <button className="events-ticket-btn">Buy Ticket</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA BOTTOM (dark blue + purple blocks) */}
      <div className="articles-cta">
        <div className="articles-cta-inner container">
          <h2>Collect More Sneakers Today</h2>
          <button className="articles-cta-btn">Sign up now</button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
