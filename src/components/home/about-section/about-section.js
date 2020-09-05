import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBone } from "@fortawesome/free-solid-svg-icons";

import "./about-section.scss";

const block = "about-section";

const About = () => {
  return (
    <div className={block}>
      <section className={`${block}__section-a`}>
        <h2 className={`${block}__section-header`}>
          <FontAwesomeIcon
            icon={faBone}
            className={`${block}__section-header__icon`}
          />
          BENEFITS OF RAW FOOD
          <FontAwesomeIcon
            icon={faBone}
            className={`${block}__section-header__icon`}
          />
        </h2>
        <dl className={`${block}__section-content`}>
          <dt className={`${block}__content-title`}>Improved Coat</dt>
          <dd className={`${block}__content-description`}>
            When switching to raw, one of the first and most obvious differences
            is healthier skin and a soft, shiny coat with less shedding and
            dandruff.
          </dd>
          <dt className={`${block}__content-title`}>Improved Oral Health</dt>
          <dd className={`${block}__content-description`}>
            Raw diets have less starches and processed fats allowing saliva to
            better breakdown food and reduce food from sticking to teeth, which
            improves bad breath.
          </dd>
          <dt className={`${block}__content-title`}>Less Waste</dt>
          <dd className={`${block}__content-description`}>
            Traditional processed kibbles are full of fillers that pass right
            through the body resulting in larger poops. Pets on a raw diet
            absorb and utilize more of the food, which decreases waste. Less
            waste equals smaller, less stinky poops.
          </dd>
          <dt className={`${block}__content-title`}>Improved Weight Control</dt>
          <dd className={`${block}__content-description`}>
            Raw pet food diets are low in carbohydrates and high in proteins.
            This decreased carbohydrate intake reduces weight gain and promotes
            weight loss. Low or no carbohydrate diets are supported by the AAFCO
            and National Research Council.
          </dd>
          <dt className={`${block}__content-title`}>Improved Digestion</dt>
          <dd className={`${block}__content-description`}>
            Dogs have short digestive tracts designed for processing raw meat.
            This raw meat contains live enzymes, natural anti-oxidants, fully
            digestible proteins, essential fatty acids, and organic vitamins and
            minerals needed for a balanced diet.
          </dd>
        </dl>
      </section>
      <div className={`${block}__divider`} />
      <section className={`${block}__section-b`}>
        <h2 className={`${block}__section-header`}>
          <FontAwesomeIcon
            icon={faBone}
            className={`${block}__section-header__icon`}
          />
          About B
          <FontAwesomeIcon
            icon={faBone}
            className={`${block}__section-header__icon`}
          />
        </h2>
        <p className={`${block}__section-content`}>
          I'm baby tousled narwhal sriracha kombucha, ethical meditation artisan
          vexillologist salvia fam kinfolk tbh. Ramps green juice cred raclette,
          photo booth sartorial portland af schlitz vexillologist skateboard
          forage jean shorts tumeric. Hella vaporware live-edge next level. Air
          plant 8-bit small batch, polaroid knausgaard deep v organic vape
          post-ironic kombucha. Neutra activated charcoal sustainable twee
          squid. Distillery synth truffaut kinfolk wolf trust fund mixtape deep
          v.
        </p>
      </section>
    </div>
  );
};

export default About;
