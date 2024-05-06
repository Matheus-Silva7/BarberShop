/* import { useLayoutEffect, useRef } from "react"; */
import imgThumbnail from "../../assets/img/backgrounds/thumbnail.jpg";
import { SectionAbout, DivTextAbout, DivInfos } from "./AboutStyles";
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
    <SectionAbout id="about-us"/* ref={el} */>
      <DivTextAbout className="about-item item">
        <h2>Your personal barber service at your home</h2>
        <p>
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo.
        </p>
        <DivInfos>
          <div>
            <h3>99 <span>%</span></h3>
            <h4>Customer Satisfaction</h4>
          </div>
          <div>
            <h3>10 <span>+</span></h3>
            <h4>years of experience</h4>
          </div>
        </DivInfos>
      </DivTextAbout>
      <img src={imgThumbnail} alt="Image barbershop thumbnail" className="about-item item" />
    </SectionAbout>
  );
}

export default AboutUs;
