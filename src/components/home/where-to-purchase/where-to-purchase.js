import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import whereToPurchase from "../../assets/where-to-purchase.png";
import whispyCircle from "../../assets/whispy-circle-yellow-perfect.svg";
import whispyCircleWhite from "../../assets/whispy-circle-white-perfect.svg";
import swiggleBlue from "../../assets/swiggle-blue-perfect.svg";

import "./where-to-purchase.scss";

const block = "where-to-purchase";

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
      <img
        src={whereToPurchase}
        className={`${block}__image`}
        alt="brown dog"
      />
      <div
        className={cn(
          `${block}__text-container`,
          bbox.top < 500 ? `${block}--show` : `${block}--hide`
        )}
      >
        <h2 className={`${block}__title`}>WHERE TO PURCHASE</h2>
        <dl className={`${block}__description`}>
          <dt>FARMERS MARKET</dt>
          <dd>TBD</dd>
          {/* <dt>BARNES SUPPLY CO</dt>
          <dd>9th Street Durham, NC</dd> */}
          <dt>ONLINE ORDERS</dt>
          <dd>
            Check out our online store for more information. We offer free
            limited local delivery with a minimum order of $50
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default WhereToPurchase;
