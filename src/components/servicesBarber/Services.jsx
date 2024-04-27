import ServicesItens from "./ServicesItens";
import {SectionService, H2Service, Pservice, DivServices} from "./ServicesStyles"

const listServices = [
  {
    id: 1,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 1,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 1,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 1,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 1,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
  {
    id: 1,
    titleService: "Adult haircut",
    descService:
      "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
    priceService: "$39 USD",
  },
];

function Services() {
  return (
    <SectionService>
      <H2Service>Browse our services</H2Service>
      <Pservice>
        Nulla egestas sapien integer mi fermentum tellus tristique consequat
        pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
        prci eu magna in senectus sit eget justo eget.
      </Pservice>
      <DivServices>
      {listServices.map(({ id, titleService, descService, priceService }) => (
        <ServicesItens key={id} title={titleService} desc={descService} price={priceService} />
      ))}
      </DivServices>
    </SectionService>
  );
}

export default Services;
