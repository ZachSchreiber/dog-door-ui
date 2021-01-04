import React, { useEffect } from "react";
import cn from "classnames";
import Header from "../header";
import stacyImage from "../assets/Stacy.png";
import zachImage from "../assets/zach.png";
import lunaImage from "../assets/luna.svg";
import razzoImage from "../assets/razzo.svg";
import swiggleYellow from "../assets/swiggle-perfect.svg";

import "./meet-the-pack.scss";

const block = "meet-the-pack";

const MeetThePack = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);

  return (
    <div className={block}>
      <Header showHeader={"show"} />
      <img
        src={swiggleYellow}
        className={`${block}__swiggle--yellow`}
        alt="swiggle"
      />
      <div className={`${block}__container`}>
        <h2 className={`${block}__title`}>MEET THE PACK</h2>
        <div className={cn(`${block}__main-article`)}>
          <div className={`${block}__main-article--image-container`}>
            <img
              src={stacyImage}
              className={cn(`${block}__main-article--image`)}
              alt="Stacy"
            />
          </div>
          <h3 className={`${block}__main-article--title`}>STACY GRAY, OWNER</h3>
          <p className={`${block}__main-article--content`}>
            A former nurse turned business owner, Stacy brings her love of
            healthy food and pets together with advocacy for quality, locally
            sourced food.
          </p>
        </div>
        <div className={cn(`${block}__article-container`, `${block}--show`)}>
          <div className={cn(`${block}__article`)}>
            <div className={`${block}__article--image-container`}>
              <img
                src={razzoImage}
                className={cn(`${block}__article--image`)}
                alt="Razzo"
              />
            </div>
            <h3 className={`${block}__article--title`}>
              RAZZO, QUALITY CONTROL <br /> DEPARTMENT
            </h3>
            <p className={`${block}__article--content`}>
              Razzo is our newest recruit from DAPS. He is terrible at quality
              control because he loves all the foods. Fetch is his favorite team
              building activity.
            </p>
          </div>
          <div className={cn(`${block}__article`)}>
            <div className={`${block}__article--image-container`}>
              <img
                src={zachImage}
                className={cn(`${block}__article--image`)}
                alt="Zach"
              />
            </div>
            <h3 className={`${block}__article--title`}>
              ZACH SCHREIBER, TECH SUPPORT
            </h3>
            <p className={`${block}__article--content`}>
              A talented developer, Zach keeps the crew virtually connected to
              our customers. He is an amazing cook and the world's most patient
              and supportive husband.
            </p>
          </div>
          <div className={cn(`${block}__article`)}>
            <div className={`${block}__article--image-container`}>
              <img
                src={lunaImage}
                className={cn(`${block}__article--image`)}
                alt="Luna"
              />
            </div>
            <h3 className={`${block}__article--title`}>
              LUNA, HUMAN (& CANINE) <br /> RESOURSES DEPARTMENT
            </h3>
            <p className={`${block}__article--content`}>
              With her strong terrier drive, Luna vocally encourages the crew to
              maintain productivity and keep scratching her back. She has been
              busy training the new QC Dept.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetThePack;
