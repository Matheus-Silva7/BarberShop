import UserImage from "../../assets/img/img-review/user-image.png";
import Stars from "../../assets/img/img-review/stars.png";
import { DivCard } from "./ReviewStyles";
import ScrollAnimation from "react-animate-on-scroll";

function UserReview() {
  return (
    <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
      <DivCard className="Containe-user">
        <img src={UserImage} alt="" />
        <img src={Stars} alt="" />
        <h3>THE BEST BARBER Services</h3>
        <p className="review-user">
          Et proin ut in dignissim sem non a nullam magna lectus urna et dui
          quam tellus imperdiet sit purus at fringilla scelerisque diam amet
          fermentum orci fringilla aliquet nulla lectus erat eu auctor
        </p>
        <h4 className="user-name">SAM HOUSTON</h4>
      </DivCard>
    </ScrollAnimation>
  );
}

export default UserReview;
