import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import porterImage from "../../assets/barktic-porter.svg";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";

import "./barktic-porter.scss";

const block = "barktic-porter";

const BarkticPorter = () => {
  const [bbox, ref] = useScroll();

  return (
    <div ref={ref} className={block}>
      <img
        src={whispyCircle}
        className={`${block}__circle--yellow`}
        alt="yellow circle"
      />
      <img src={swiggleBlue} className={`${block}__swiggle`} alt="swiggle" />
      <div
        className={cn(
          `${block}__content-container`,
          bbox.top < 500 ? `${block}--show` : `${block}--hide`
        )}
      >
        <img
          src={porterImage}
          className={`${block}__image`}
          alt="A blood hound and a ship"
        />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>
            SALTY SEA DOG
            <br /> BARKTIC PORTER
          </h2>
          <p className={`${block}__description`}>
            Salty Sea Dog is made with NC caught fish and locally grown seasonal
            vegetables. There is absolutely no alcohol or hops, which are toxic
            to dogs. Cats also love our Barktic Porter.
          </p>
          <br />
          <p className={`${block}__description`}>
            This brew is an excellent source of:{" "}
          </p>
          <ul className={`${block}__description`}>
            <li>Calcium for healthy bones and teeth</li>
            <li>Iodine for improved thyroid function</li>
            <li>Omega 3 fatty acids to support a healthy skin and coat</li>
          </ul>
          <br />
          <p className={`${block}__description`}> Ingredients:</p>
          <p className={`${block}__description`}>
            Fish Broth (Filtered Water, Fish Bones, Carrot, Celery, Fennel,
            Atlantic Kelp, Bay Leaf, Thyme), Apple Cider Vinegar
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

export default BarkticPorter;
