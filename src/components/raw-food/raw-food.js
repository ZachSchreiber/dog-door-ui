import React from "react";
import Header from "../header";
import RawOverview from "./raw-overview";

import "./raw-food.scss";

const RawFood = () => {
  return (
    <div className="raw-food">
      <Header showHeader={"show"} />
      <RawOverview />
    </div>
  );
};

export default RawFood;
