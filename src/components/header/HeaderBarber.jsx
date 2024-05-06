import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, Nav } from "./HeaderStyles";
import { IoMenu } from "react-icons/io5";
import SloganHeader from "./SloganHeader";

function HeaderBarber() {
  return (
    <HeaderContainer>
      <HeaderContent >
        <img src={logo} alt="" />
        <Nav>
          <a href="#about-us">About Us</a>
          <a href="#services">Services</a>
          <a href="#feedback">Feedbacks</a>
          <a href="#contact">Contact</a>
        </Nav>
        <div className="menu-mobile">
        <IoMenu className="icon"/>
        </div>
      </HeaderContent>
      <SloganHeader/>
    </HeaderContainer>
  );
}

export default HeaderBarber;
