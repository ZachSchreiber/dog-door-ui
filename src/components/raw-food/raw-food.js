import React from "react";
import Header from "../header";
import RawOverview from "./raw-overview";
import RawSelection from "./raw-selection";

import "./raw-food.scss";

const RawFood = () => {
  return (
    <div className="raw-food">
      <Header showHeader={"show"} />
      <RawOverview />
      <RawSelection />
    </div>
  );
};

export default RawFood;
