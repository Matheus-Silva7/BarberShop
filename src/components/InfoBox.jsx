import React from "react";

import { DivInfo, IconInfo, InfoTitle, DescTitle } from "./InfoBoxStyles";

function InfoBox({ icon, info, desc }) {
  return (
    <DivInfo>
        <IconInfo>{icon}</IconInfo>
        <InfoTitle>{info}</InfoTitle>
        <DescTitle>{desc}</DescTitle>
    </DivInfo>
  );
}

export default InfoBox;
