import React from "react";
import IntroImg from "../../assets/img/backgrounds/background-header.jpg";
import { DivSlogan } from "./SloganStyles";
import ButtonMain from "../buttons/ButtonMain";
import ButtonSecond from "../buttons/ButtonSecond";
import { TypeAnimation } from "react-type-animation";

const SloganHeader = () => {
  return (
    
    <DivSlogan>
      <img className="into-img" src={IntroImg} alt="background img" />

      <div className="content">
      <TypeAnimation className="title"
      sequence={[
        'The ultimate convenience for busy people',
        1000, 
      ]}
      wrapper="span"
      speed={30}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
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
