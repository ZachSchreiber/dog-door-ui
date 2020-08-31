import React from "react";
import dogDoorLogo from "./DogDoor.png";
import AboutSection from "./about-section";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="image">
        <div className="image__overlay">
          <img src={dogDoorLogo} alt="dog door logo" />
          <h1>Coming soon!</h1>
        </div>
      </div>
      <AboutSection />
      <div className="footer-section">
        <h2 className="footer-section__section-header">What we do</h2>
        <p className="footer-section__section-content">
          skim the surface to this point. The target area is only two meters
          wide. It’s a small thermal exhaust port, right below the main port.
          The shaft leads directly to the reactor system. A precise hit will
          start a chain reaction which should destroy the station. Only a
          precise hit will set up a chain reaction. The shaft is ray-shielded,
          so you’ll have to use proton torpedoes. That’s impossible, even for a
          computer. It’s not impossible. I used to bull’s-eye womp rats in my
          T-sixteen back home. They’re not much bigger than two meters. Man your
          ships! And may the Force be with you!
        </p>
      </div>
    </>
  );
};

export default Home;
