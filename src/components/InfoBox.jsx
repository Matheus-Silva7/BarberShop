import React from "react";

import { DivInfo } from "./InfoBox";

function InfoBox({ icon, info, desc }) {
  return (
    <DivInfo>
      <div>
        <h2>{icon}</h2>
        <h3>{info}</h3>
        <hr />
        <h4>{desc}</h4>
      </div>
    </DivInfo>
  );
}

export default InfoBox;
