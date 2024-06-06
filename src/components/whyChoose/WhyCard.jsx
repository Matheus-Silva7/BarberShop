import ScrollAnimation from "react-animate-on-scroll";
import { CardDiv } from "./WhychooseStyles";

function WhyCard({ image, title, desc }) {
  return (
    <>
      <ScrollAnimation animateIn='bounceInRight'>
        <CardDiv>
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </CardDiv>
      </ScrollAnimation>
    </>
  );
}

export default WhyCard;
