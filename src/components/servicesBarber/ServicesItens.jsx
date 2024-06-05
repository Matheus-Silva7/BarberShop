import ScrollAnimation from "react-animate-on-scroll";
import {Service, DivText} from "./ServicesStyles"

function ServicesItens({icon, title, desc, price}) {
  return (
    <Service>
      <ScrollAnimation animateIn='fadeIn'>
      <img src={icon} alt=""/>
      <DivText>
        <h3>{title}</h3>
        <p>{desc}</p>
        <h3>{price}</h3>
      </DivText>
      </ScrollAnimation>
    </Service>
  );
}

export default ServicesItens;
