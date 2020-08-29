import React from "react";
import dogDoorLogo from "./DogDoor.png";

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
      {/* <div className="about">
        <p>fun</p>
      </div>
      <div className="footer"></div> */}
    </>
  );
};

export default Home;
