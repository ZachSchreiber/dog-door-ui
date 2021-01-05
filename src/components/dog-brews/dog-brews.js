import React from "react";
import { Helmet } from "react-helmet";
import Header from "../header";
import BrewsOverview from "./brews-overview";
import BarkticPorter from "./barktic-porter";
import CarlolinaChillsner from "./carolina-chillsner";
import MaltLicker from "./malt-licker";

import "./dog-brews.scss";

const DogBrews = () => {
  return (
    <div className="dog-brews">
      <Helmet>
        <title>Dog Brews</title>
        <meta
          name="description"
          content="Dog Door Pet Food offers several NONALCOHOLIC brews formulated
            specifically for your furry friend."
        />
      </Helmet>
      <Header showHeader={"show"} />
      <BrewsOverview />
      <BarkticPorter />
      <CarlolinaChillsner />
      <MaltLicker />
    </div>
  );
};

export default DogBrews;
