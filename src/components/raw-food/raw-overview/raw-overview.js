import React, { useEffect } from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import rawBowl from "../../assets/raw-bowl.png";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";
import swiggleYellow from "../../assets/swiggle-perfect.svg";

import "./raw-overview.scss";

const block = "raw-overview";

const RawOverview = () => {
  const [bbox, ref] = useScroll();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);

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
        <img src={rawBowl} className={`${block}__image`} alt="bowl of food" />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>RAW FOOD</h2>
          <p className={`${block}__description`}>
            Dog Door Pet Food offers several raw food options for dogs. Meats
            and seasonal vegetables are sourced from local farms and businesses.
            Using local ingredients decreases our environmental impact, supports
            our communities, and ensures each ingredient offers its optimal
            nutritional benefit.
          </p>
          <br />
          <p className={`${block}__description`}>
            We believe a fully balanced diet is achieved by consuming a variety
            of foods span across several meals and it is not necessary to
            supplement all nutritional needs in one meal. Thus, our meals are
            marketed as a topping according to the guidelines of AAFCO.
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

export default RawOverview;
