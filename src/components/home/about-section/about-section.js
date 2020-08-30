import React from "react";

import "./about-section.scss";

const block = "about-section";

const About = () => {
  return (
    <div className={block}>
      <section className={`${block}__section-a`}>
        <h2 className={`${block}__section-header`}>About A</h2>
        <p className={`${block}__section-content`}>
          I'm baby actually lomo subway tile, lumbersexual PBR&B trust fund
          gluten-free letterpress everyday carry kinfolk microdosing stumptown
          farm-to-table irony. Pour-over ethical vinyl normcore celiac
          skateboard flannel cornhole direct trade aesthetic hammock copper mug
          typewriter offal raclette. Pinterest tacos asymmetrical iceland pabst
          thundercats. XOXO ramps snackwave listicle church-key readymade.
          Occupy subway tile lumbersexual, coloring book squid vaporware
          hammock.
        </p>
      </section>
      <div className={`${block}__divider`} />
      <section className={`${block}__section-b`}>
        <h2 className={`${block}__section-header`}>About B</h2>
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
