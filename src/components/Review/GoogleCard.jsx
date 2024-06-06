import ScrollAnimation from "react-animate-on-scroll";
import GoogleIcon from "../../assets/img/img-review/google-icon.png";
import Stars from "../../assets/img/img-review/stars.png";
import { DivCard } from "./ReviewStyles";

function GoogleCard() {
  return (
    <ScrollAnimation animateIn="bounceInRight">
      <DivCard>
        <img className="logo-icon" src={GoogleIcon} alt="" />
        <h3>Google</h3>
        <h2>4.9</h2>
        <img src={Stars} alt="" />
        <p>196 reviews</p>
      </DivCard>
    </ScrollAnimation>
  );
}

export default GoogleCard;
