import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import chillsnerImage from "../../assets/carolina-chillsner.svg";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";

import "./carolina-chillsner.scss";

const block = "carolina-chillsner";

const CarlolinaChillsner = () => {
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
          src={chillsnerImage}
          className={`${block}__image`}
          alt="A blood hound and a ship"
        />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>CAROLINA CHILLSNER</h2>
          <p className={`${block}__description`}>
            Carolina Chillsner is made with chicken from Little Way Farm in
            Siler City and locally grown, seasonal vegetables. There is
            absolutely no alcohol or hops, which are toxic to dogs.
          </p>
          <br />
          <p className={`${block}__description`}>
            This brew is an excellent source of:
          </p>
          <ul className={`${block}__description`}>
            <li>
              Vitamins, minerals, and nutrients such as calcium, magnesium,
              phosphorus, silicon.
            </li>
            <li>
              Gelatin, collagen, glucosamine, and chondroitin to promote healthy
              joints.
            </li>
            <li>
              Chamomile which will calm anxiety, reduce inflammation, and sooth
              an upset stomach.
            </li>
          </ul>
          <br />
          <p className={`${block}__description`}> Ingredients:</p>
          <p className={`${block}__description`}>
            Chicken Broth (Filtered Water, Chicken Bones, Carrot, Celery,
            Chamomile, Turmeric, Rosemary), Apple Cider Vinegar
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

export default CarlolinaChillsner;
