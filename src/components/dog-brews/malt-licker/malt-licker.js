import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import maltLickerImage from "../../assets/malt-licker.svg";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";
import swiggleYellow from "../../assets/swiggle-perfect.svg";

import "./malt-licker.scss";

const block = "malt-licker";

const MaltLicker = () => {
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
          src={maltLickerImage}
          className={`${block}__image`}
          alt="A blood hound and a ship"
        />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>
            LOWRIDER
            <br /> MALT LICKER
          </h2>
          <p className={`${block}__description`}>
            Lowrider Malt Licker is made with beef from Firsthand Foods farmers
            and locally grown, seasonal vegetables. There is absolutely no
            alcohol or hops, which are toxic to dogs.
          </p>
          <br />
          <p className={`${block}__description`}>
            This brew is an excellent source of:
          </p>
          <ul className={`${block}__description`}>
            <li>
              Bone marrow which contains adiponectin that has been shown to
              reduce the risk of heart disease and certain cancers. Marrow also
              supports kidney and digestive function, it can aid in repairing
              wounds, and will help generate new red and white blood cells.
            </li>
            <li>
              Amino acids like glycine and glutamine that aids digestion and
              promotes gut health.
            </li>
          </ul>
          <br />
          <p className={`${block}__description`}> Ingredients:</p>
          <p className={`${block}__description`}>
            Beef Broth (Filtered Water, Beef Bones, Carrot, Celery, Spinach,
            Ginger, Thyme), Apple Cider Vinegar
          </p>
          <br />
          <p className={`${block}__description`}>Guaranteed Analysis:</p>
          <p className={`${block}__description`}>
            Crude Protein (min) 2%, Crude Fat (min) 0%, Crude Fiber (max) 1%,
            Moisture (max) 97%
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

export default MaltLicker;
