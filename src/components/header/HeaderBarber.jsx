import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, Nav } from "./HeaderStyles";
import SloganHeader from "./SloganHeader";

function HeaderBarber() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Nav>
          <a href="#about-us">About Us</a>
          <a href="">Services</a>
          <a href="">Feedbacks</a>
          <a href="">Contact</a>
        </Nav>
      </HeaderContent>
      <SloganHeader/>
    </HeaderContainer>
  );
}

export default HeaderBarber;
