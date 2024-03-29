import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import brownDog from "../../assets/we-are-brown-dog.png";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";

import "./about-section.scss";

const block = "about-section";

const About = () => {
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
        <img src={brownDog} className={`${block}__image`} alt="brown dog" />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>WHAT WE DO</h2>
          <p className={`${block}__description`}>
            Dog Door Pet Food is Durham's premier Farm-To-Fido pet food company.
            We offer pet food, dog brews, and other products made with simple,
            locally sourced ingredients.{" "}
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

export default About;
