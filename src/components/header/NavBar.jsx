import { IoIosClose, IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, Nav } from "./NavBarStyles";
import { useState } from "react";


function HeaderBarber() {

  const [click, setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }

  return (
    <HeaderContainer>
      <HeaderContent >
        <img className="logo" src={logo} alt="" />
        <Nav className={click? "active": ""}>
          <a href="#about-us">About Us</a>
          <a href="#services">Services</a>
          <a href="#feedback">Feedbacks</a>
          <a href="#contact">Contact</a>
        </Nav>
        <div className="menu-mobile" onClick={handleClick}>
        {click ? (
          <IoMdMenu  className="icon"/>
        ) : (
          <IoIosClose   className="icon"/>
        )}
        </div>
      </HeaderContent>
   
    </HeaderContainer>
  );
}

export default HeaderBarber;
