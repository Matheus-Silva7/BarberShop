import {Service, DivText} from "./ServicesStyles"

function ServicesItens({icon, title, desc, price}) {
  return (
    <Service>
      <img src={icon} alt=""/>
      <DivText>
        <h3>{title}</h3>
        <p>{desc}</p>
        <h3>{price}</h3>
      </DivText>
    </Service>
  );
}

export default ServicesItens;
