import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import insta from "../../assets/instagram-brands.svg";
import twitter from "../../assets/twitter-brands.svg";
import getInTouch from "../../assets/get-in-touch.png";
import whispyCircle from "../../assets/whispy-circle-yellow.png";
import whispyCircleWhite from "../../assets/whispy-circle-white.png";
import swiggleBlue from "../../assets/swiggle-blue.png";

import "./get-in-touch.scss";

const block = "get-in-touch";

const WhereToPurchase = () => {
  const [bbox, ref] = useScroll();

  return (
    <div ref={ref} className={block}>
      <div className={`${block}__image-container`}>
        <img
          src={whispyCircle}
          className={`${block}__circle--yellow`}
          alt="yellow circle"
        />
        <img src={swiggleBlue} className={`${block}__swiggle`} alt="swiggle" />
        <img
          src={whispyCircleWhite}
          className={`${block}__circle--white`}
          alt="white circle"
        />
      </div>
      <img src={getInTouch} className={`${block}__image`} alt="brown dog" />
      <div
        className={cn(
          `${block}__text-container`,
          bbox.top < 500 ? `${block}--show` : `${block}--hide`
        )}
      >
        <h2 className={`${block}__title`}>GET IN TOUCH</h2>
        <dl className={`${block}__description`}>
          <dt>SOCIAL MEDIA</dt>
          <dd>
            <img
              src={twitter}
              className={`${block}__social-icon`}
              alt="yellow circle"
            />
            <img
              src={insta}
              className={`${block}__social-icon`}
              alt="yellow circle"
            />
          </dd>
          <dt>EMAIL</dt>
          <dd>
            <a href="mailto:dogdoorpetfood@gmail.com">
              dogdoorpetfood@gmail.com
            </a>
          </dd>
          <dt>PHONE NUMBER</dt>
          <dd>
            <a href="tel:9198082545">(919) 808-2545</a>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default WhereToPurchase;
