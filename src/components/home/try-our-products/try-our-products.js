import React from "react";
import cn from "classnames";
import Article from "../../article";
import bluePaw from "../../assets/paw-logo-blue.png";
import beerBottle from "../../assets/beer-bottle.png";
import dogBowl from "../../assets/dog-bowl.png";

import "./try-our-products.scss";

const block = "try-our-products";

const TryOurProducts = React.forwardRef(({ showAbout }, ref) => {
  return (
    <div className={block} ref={ref}>
      <h2 className={`${block}__title`}>Our Products</h2>
      <div
        className={cn(
          `${block}__article-container`,
          showAbout === "show" ? `${block}--show` : `${block}--hide`
        )}
      >
        <Article
          image={dogBowl}
          title={"RAW FOOD"}
          content={
            "Support your pet's health by feeding them a healthy raw diet."
          }
        />
        <Article
          image={beerBottle}
          title={"DOG BREWS"}
          content={
            "A refreshing and healthy treat made exclusively for your furry friend."
          }
        />
        <Article
          image={bluePaw}
          title={"BEAUTIFUR"}
          content={
            "Pamper your best friend with these organic pet care products."
          }
          isPaw={true}
        />
      </div>
    </div>
  );
});

export default TryOurProducts;
