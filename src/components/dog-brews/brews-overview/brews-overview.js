import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import overviewImage from "../../assets/brews-overview.png";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";
import swiggleYellow from "../../assets/swiggle-perfect.svg";

import "./brews-overview.scss";

const block = "brews-overview";

const BrewsOverview = () => {
  const [bbox, ref] = useScroll();

  return (
    <div ref={ref} className={block}>
      <img
        src={whispyCircle}
        className={`${block}__circle--yellow`}
        alt="yellow circle"
      />
      <img src={swiggleBlue} className={`${block}__swiggle`} alt="swiggle" />
      <img
        src={swiggleYellow}
        className={`${block}__swiggle--yellow`}
        alt="swiggle"
      />
      <div
        className={cn(
          `${block}__content-container`,
          bbox.top < 500 ? `${block}--show` : `${block}--hide`
        )}
      >
        <img
          src={overviewImage}
          className={`${block}__image`}
          alt="A blood hound and a ship"
        />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>DOG BREWS</h2>
          <p className={`${block}__description`}>
            Dog Door Pet Food offers several NONALCOHOLIC brews formulated
            specifically for your furry friend.
          </p>
          <br />
          <p className={`${block}__description`}>
            All brews contain absolutely no alcohol or hops, no mad scientist
            list of chemicals, no artificial flavors or colors.
          </p>
          <br />
          <p className={`${block}__description`}>
            Serve our brews on their own as a refreshing treat or pour over
            boring dry kibbles for a boost of flavor.
          </p>
          <br />
          <p className={`${block}__description`}>
            Don't be fooled, cats love our delicious brews too!
          </p>
        </div>
      </div>
      <img
        src={whispyCircleWhite}
        className={`${block}__circle--white`}
        alt="white circle"
      />
    </div>
  );
};

export default BrewsOverview;
