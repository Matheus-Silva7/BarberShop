import React from "react";

import { DivInfo  } from "./InfoBoxStyles";
import ScrollAnimation from "react-animate-on-scroll";

function InfoBox({ icon, info, desc }) {
  return (
      <ScrollAnimation animateIn="fadeIn">
    <DivInfo >
        <h2>{icon}</h2>
        <h3>{info}</h3>
        <h4>{desc}</h4>
    </DivInfo>
      </ScrollAnimation>
  );
}

export default InfoBox;
