import logo from "../assets/logo.svg";
import { HeaderContainer, HeaderContent, Nav, NavItem } from "./HeaderStyles";
import SloganHeader from "./SloganHeader";

function HeaderBarber() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Nav>
          <NavItem href="">About Us</NavItem>
          <NavItem href="">Services</NavItem>
          <NavItem href="">Feedbacks</NavItem>
          <NavItem href="">Contact</NavItem>
        </Nav>
      </HeaderContent>
      <SloganHeader/>
    </HeaderContainer>
  );
}

export default HeaderBarber;
