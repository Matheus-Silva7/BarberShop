/* import { useLayoutEffect, useRef } from "react"; */
import imgThumbnail from "../../assets/img/backgrounds/thumbnail.jpg";
import { SectionAbout, DivTextAbout, TitleAbout, DescAbout, DivInfos, H3Info, H4Info, SpanText } from "./AboutStyles";
/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; */

function AboutUs() {
/*   const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-item",
        scrub: true,
        markers: true,
      },
    }).fromTo(".item", {
      opacity: 0,
      y: 160,
    }, {
      opacity: 1,
      y: 0,
    });

    return () => {
      gsap.killTweensOf("#about-us");
    };
  }, []); */

  return (
    <SectionAbout id="about-us" /* ref={el} */>
      <DivTextAbout className="about-item item">
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
      <img src={imgThumbnail} alt="Image barbershop thumbnail" className="about-item item" />
    </SectionAbout>
  );
}

export default AboutUs;
