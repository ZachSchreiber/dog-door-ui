import React from "react";
import { Helmet } from "react-helmet";
import Header from "../header";
import RawOverview from "./food-overview";
import RawSelection from "./food-selection";

import "./food.scss";

const Food = () => {
  return (
    <div className="food">
      <Helmet>
        <title>Pet Food</title>
        <meta
          name="description"
          content="Dog Door Pet Food offers several pet food options for dogs. Meats
            and seasonal vegetables are sourced from local farms and businesses."
        />
      </Helmet>
      <Header showHeader={"show"} />
      <RawOverview />
      <RawSelection />
    </div>
  );
};

export default Food;
