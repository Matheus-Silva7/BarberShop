import React from "react";

import { DivInfo  } from "./InfoBoxStyles";

function InfoBox({ icon, info, desc }) {
  return (
    <DivInfo>
        <h2>{icon}</h2>
        <h3>{info}</h3>
        <h4>{desc}</h4>
    </DivInfo>
  );
}

export default InfoBox;
