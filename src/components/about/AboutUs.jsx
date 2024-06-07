import ScrollAnimation from "react-animate-on-scroll";
import imgThumbnail from "../../assets/img/backgrounds/thumbnail.jpg";
import { SectionAbout, DivTextAbout, DivInfos } from "./AboutStyles";

function AboutUs() {
  return (
    <SectionAbout id="about-us">
      <ScrollAnimation animateIn="bounceInRight">
        <DivTextAbout className="about-item item">
          <h2>Your personal barber service at your home</h2>
          <p>
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo.
          </p>
          <DivInfos>
            <div>
              <h3>
                99 <span>%</span>
              </h3>
              <h4>Customer Satisfaction</h4>
            </div>
            <div>
              <h3>
                10 <span>+</span>
              </h3>
              <h4>years of experience</h4>
            </div>
          </DivInfos>
        </DivTextAbout>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight">
        <img
          src={imgThumbnail}
          alt="Image barbershop thumbnail"
          className="about-item item"
        />
      </ScrollAnimation>
    </SectionAbout>
  );
}

export default AboutUs;
