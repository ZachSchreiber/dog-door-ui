import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Article from "../../article";
import bluePaw from "../../assets/paw-logo-blue-perfect.svg";
import beerBottle from "../../assets/beer-bottle-perfect.svg";
import dogBowl from "../../assets/dog-bowl-perfect.svg";

import "./try-our-products.scss";

const block = "try-our-products";

const TryOurProducts = () => {
  return (
    <div className={block}>
      <h2 className={`${block}__title`}>OUR PRODUCTS</h2>
      <div className={cn(`${block}__article-container`, `${block}--show`)}>
        <Link className={`${block}__link`} to={"/raw-food"}>
          <Article
            image={dogBowl}
            title={"RAW FOOD"}
            content={
              "Support your pet's health by feeding them a healthy raw diet."
            }
          />
        </Link>
        <Link className={`${block}__link`} to={"/dog-brews"}>
          <Article
            image={beerBottle}
            title={"DOG BREWS"}
            content={
              "A refreshing and healthy treat made exclusively for your furry friend."
            }
          />
        </Link>
        <Article
          image={bluePaw}
          title={"AND MORE..."}
          content={"Treats, pet care products, toys, and more!"}
          isPaw={true}
        />
      </div>
    </div>
  );
};

export default TryOurProducts;
