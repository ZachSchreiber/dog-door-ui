import React from "react";
import Header from "../header";
import BrewsOverview from "./brews-overview";
import BarkticPorter from "./barktic-porter";
import CarlolinaChillsner from "./carolina-chillsner";
import MaltLicker from "./malt-licker";

import "./dog-brews.scss";

const DogBrews = () => {
  return (
    <div className="dog-brews">
      <Header showHeader={"show"} />
      <BrewsOverview />
      <BarkticPorter />
      <CarlolinaChillsner />
      <MaltLicker />
    </div>
  );
};

export default DogBrews;
