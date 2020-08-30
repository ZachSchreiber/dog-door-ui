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
      <div className="footer"></div>
    </>
  );
};

export default Home;
