import React from "react";
import imgThumbnail from "../../assets/img/backgrounds/thumbnail.jpg";
import { SectionAbout, DivTextAbout, TitleAbout, DescAbout, DivInfos, H3Info, H4Info, SpanText } from "./AboutStyles";

function AboutUs() {
  return (
    <SectionAbout id="about-us">
      <DivTextAbout>
        <TitleAbout>Your personal barber service at your home</TitleAbout>
        <DescAbout>
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo.
        </DescAbout>
        <DivInfos>
          <div>
            <H3Info>99 <SpanText>%</SpanText></H3Info>
            <H4Info>Customer Satisfaction</H4Info>
          </div>
          <div>
            <H3Info>10 <SpanText>+</SpanText></H3Info>
            <H4Info>years of experience</H4Info>
          </div>
        </DivInfos>
      </DivTextAbout>
      <img src={imgThumbnail} alt="Image barbershop thumbnail"/>
    </SectionAbout>
  );
}

export default AboutUs;
