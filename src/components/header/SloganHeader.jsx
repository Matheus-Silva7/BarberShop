import React from "react";
import IntroImg from "../../assets/background-header.svg";
import { DivSlogan } from "./SloganStyles";
import ButtonMain from "../buttons/ButtonMain";
import ButtonSecond from "../buttons/ButtonSecond";

const SloganHeader = () => {
  return (
    <DivSlogan>
      <img className="into-img" src={IntroImg} alt="background img" />
      <div className="content">
        <h1 className="title">The ultimate convenience for busy people</h1>
        <p>Experience the Convenience of In-Home Barber Services</p>

        <div className="div-bnt">
          <ButtonMain />
          <ButtonSecond />
        </div>
      </div>
    </DivSlogan>
  );
};

export default SloganHeader;
