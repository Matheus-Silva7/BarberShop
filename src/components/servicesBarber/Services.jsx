import ServicesItens from "./ServicesItens";
import {SectionService, DivServices} from "./ServicesStyles";
import adultHaircut from "../../assets/img/icons-services/adult-haircut.png"
import kidsHaircut from "../../assets/img/icons-services/kids-haircut.png"
import beardTrim from "../../assets/img/icons-services/beard-trim.png"
import neckShave from "../../assets/img/icons-services/neck-shave.png"
import scalpMoisturizing from "../../assets/img/icons-services/scalp-moisturizing.png"
import beardGrooming from "../../assets/img/icons-services/bearb-grooming.png"
import ButtonMain from "../buttons/ButtonMain"

const listServices = [
  {
    id: 1,
    image: adultHaircut,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 2,
    image: kidsHaircut,
    titleService: "Kids Haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$19 USD",
  },
  {
    id: 3,
    image: beardTrim,
    titleService: "Beard Trim",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$29 USD",
  },
  {
    id: 4,
    image: neckShave,
    titleService: "Neck Shave",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 5,
    image: scalpMoisturizing,
    titleService: "Scalp Moisturizing",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$10 USD",
  },
  {
    id: 6,
    image: beardGrooming,
    titleService: "Beard Grooming",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$49 USD",
  },
];

function Services() {
  return (
    <SectionService id="services" className="hidden">
      <h2>Browse our services</h2>
      <p>
        Nulla egestas sapien integer mi fermentum tellus tristique consequat
        pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
        prci eu magna in senectus sit eget justo eget.
      </p>
      <DivServices>
      {listServices.map(({ id, image, titleService, descService, priceService }) => (
        <ServicesItens key={id} icon={image} title={titleService} desc={descService} price={priceService} />
      ))}
      </DivServices>
      <ButtonMain/>
    </SectionService>
  );
}

export default Services;
