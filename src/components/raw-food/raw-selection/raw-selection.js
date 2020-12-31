import React from "react";
import cn from "classnames";
import Article from "../../article";
import pig from "../../assets/pig.png";
import bull from "../../assets/bull.png";
import chicken from "../../assets/chicken.png";

import "./raw-selection.scss";

const block = "raw-selection";

const RawSelection = () => {
  return (
    <div className={block}>
      <h2 className={`${block}__title`}>OUR RAW FOOD</h2>
      <div className={cn(`${block}__article-container`, `${block}--show`)}>
        <Article
          image={bull}
          title={"BEEFY BUDY"}
          content={
            "Beef Heart, Beef Liver, Beef, Carrot, Green Bean, Blueberry, Yogurt, Whole Egg, Flax, Seed, Sunflower Oil, Rosemary"
          }
          imageStyleName={`${block}__bull-image`}
        />
        <Article
          image={pig}
          title={"THIS LITTLE PIGGY"}
          content={
            "Pork, Pork Heart, Pork Kidney, Pork Liver, Zucchini, Carrot, Blueberry, Whole Egg, Yogurt, Flax Seed, Sunflower Oil, Rosemary"
          }
          imageStyleName={`${block}__pig-image`}
        />
        <Article
          image={chicken}
          title={"CACKALAKY CHICKEN"}
          content={
            "Whole Chicken (with bones), Sweet Potato (cooked), Collards, Blueberry, Yogurt, Whole Egg, Flax Seed, Sunflower Oil, Rosemary"
          }
          imageStyleName={`${block}__chicken-image`}
        />
      </div>
    </div>
  );
};

export default RawSelection;
