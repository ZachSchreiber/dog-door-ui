import React from "react";
import { Helmet } from "react-helmet";
import Header from "../header";
import RawOverview from "./raw-overview";
import RawSelection from "./raw-selection";

import "./raw-food.scss";

const RawFood = () => {
  return (
    <div className="raw-food">
      <Helmet>
        <title>Raw Food</title>
        <meta
          name="description"
          content="Dog Door Pet Food offers several raw food options for dogs. Meats
            and seasonal vegetables are sourced from local farms and businesses."
        />
      </Helmet>
      <Header showHeader={"show"} />
      <RawOverview />
      <RawSelection />
    </div>
  );
};

export default RawFood;
