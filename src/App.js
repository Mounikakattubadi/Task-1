import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BestOfBest from "./BestOfBest";
import WhyJoinUs from "./WhyJoinUs";
import GrowCollection from "./GrowCollection";
import Shoecoll from "./Shoecoll";
import Articles from "./Articles";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <BestOfBest />
      <WhyJoinUs />
      <GrowCollection />
      <Shoecoll/>
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
