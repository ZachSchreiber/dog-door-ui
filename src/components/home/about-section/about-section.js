import React from "react";
import cn from "classnames";
import brownDog from "../../assets/we-are-brown-dog.png";

import "./about-section.scss";

const block = "about-section";

const About = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        block,
        props.showAbout === "show" && `${block}--show`,
        props.showAbout === "hide" && `${block}--hide`
      )}
    >
      <div className={`${block}__content-container`}>
        <img src={brownDog} className={`${block}__image`} alt="brown dog" />
        <div className={`${block}__text-container`}>
          <h2 className={`${block}__title`}>Who We Are</h2>
          <p className={`${block}__description`}>
            Dog Door Pet Food is Durham's premier Farm-To-Fido pet food company.
            We offer raw food, dog brews, and other products made with simple,
            locally sourced ingredients.{" "}
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
