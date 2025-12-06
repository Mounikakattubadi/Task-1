import React from "react";
import "./WhyJoinUs.css";

import whyImage from "./images/whyus.jpg";
import they1 from "./images/they1.jpg";
import they2 from "./images/they2.jpg";
import they3 from "./images/they3.jpg";
import they4 from "./images/they4.jpg";
import vector1 from "./images/vector1.png"
import vector2 from "./images/vector2.png"
import vector3 from "./images/vector3.png"
import vector4 from "./images/vector4.png"

const testimonials = [
  {
    id: 1,
    logo: vector1,
    company: "Zoomerr",
    text: "Non risus viverra enim, quis. Eget vitae auctor velit posuere habitasse.",
    name: "Helen Jummy",
    role: "Co-founder",
    image:they1,
  },
  {
    id: 2,
    logo: vector2,
    company: "SHELLS",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim.",
    name: "Hellen Jummy",
    role: "Co-founder",
    image:they2,
  },
  {
    id: 3,
    logo: vector3,
    company: "ArtVenue",
    text: "A eget sed posuere dui risus habitant commodo, turpis lorem tristique.",
    name: "David Oholo",
    role: "Product Designer",
    image:they3,
  },
  {
    id: 4,
    logo: vector4,
    company: "Waveon",
    text: "Sed dui sed aliquet scelerisque in habitasse eu, tortor lorem.",
    name: "Megan Co.",
    role: "VP Marketing",
    image:they4,
  },
];

const WhyJoinUs = () => {
  return (
    <section className="why-section">
      <div className="why container">
       
        <div className="why-card">
          <div className="why-text">
            <h2>Why join us</h2>
            <ul>
              <li>Et at lorem magna vulputate integer #Collers.</li>
              <li>Sed risus tortor, vulputate ut faucibus sit vitae accumsan.</li>
              <li>Integer sit nec placerat nibh lacus, nunc.</li>
            </ul>
            <button className="why-btn">Sign up now</button>
          </div>

          <div className="why-media">
            <div className="why-shape why-yellow" />
            <div className="why-shape why-pink" />
            <div className="why-shape why-blue-dot" />
            <div className="why-shape why-green-dot" />

            <div className="why-video-frame">
              <img
                src={whyImage}
                alt="Why join us"
                className="why-video-img"
              />
              <button className="why-video-play">▶</button>
            </div>
          </div>
        </div>

        
        <div className="love-section">
          <div className="love-header">
            <h2>Because they love us</h2>
            <div className="love-controls">
              <button className="love-dot love-dot-outline">◀</button>
              <button className="love-dot">▶</button>
            </div>
          </div>

          <div className="love-strip">
            {testimonials.map((item) => (
              <article className="love-card" key={item.id}>
                <div className="love-card-header">
                  <div className="love-logo-wrap">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="love-logo-img"
                    />
                  </div>
                  <span className="love-company">{item.company}</span>
                </div>

                <p className="love-text">{item.text}</p>

                <div className="love-person">
                  <div className="love-avatar">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="love-avatar-img"
                    />
                  </div>
                  <div>
                    <div className="love-name">{item.name}</div>
                    <div className="love-role">{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
