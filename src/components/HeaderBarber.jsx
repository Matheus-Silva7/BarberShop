import React from "react";
import logo from "../assets/logo.svg";
import { HeaderContainer, HeaderContent, Nav, NavItem } from "./HeaderStyles";

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
    </HeaderContainer>
  );
}

export default HeaderBarber;
