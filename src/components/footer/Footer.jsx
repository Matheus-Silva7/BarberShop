import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FooterB } from "./FooterStyles";

function Footer() {
  return (
    <FooterB>
      <p>© Copyright 2022 barbershop - All right reserved</p>
      <ul>
        <li><FaFacebookF/></li>
        <li><FaTwitter/></li>
        <li><FaInstagram/></li>
        <li><FaPinterestP/></li>
        <li><FaLinkedinIn/></li>
      </ul>
    </FooterB>
  )
}

export default Footer
