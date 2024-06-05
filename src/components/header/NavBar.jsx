import { IoIosClose, IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, Nav } from "./NavBarStyles";
import { useState } from "react";

function HeaderBarber() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log("Menu clicked, state is now:", !click);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <img className="logo" src={logo} alt="Logo" />
        <Nav className={click ? "active" : ""}>
          <a href="#about-us" onClick={handleClick}>About Us</a>
          <a href="#services" onClick={handleClick}>Services</a>
          <a href="#feedback" onClick={handleClick}>Feedbacks</a>
          <a href="#contact" onClick={handleClick}>Contact</a>
        </Nav>
        <div className="menu-mobile" onClick={handleClick}>
          {click ? (
            <IoIosClose className="icon" />
          ) : (
            <IoMdMenu className="icon" />
          )}
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default HeaderBarber;
