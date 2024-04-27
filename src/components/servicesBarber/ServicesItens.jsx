import {Service} from "./ServicesStyles"

function ServicesItens({icon, title, desc, price}) {
  return (
    <Service>
      <img src={icon} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <h4>{price}</h4>
      </div>
    </Service>
  );
}

export default ServicesItens;
