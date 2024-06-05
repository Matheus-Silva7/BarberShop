import { SectionWhy, ContainerCard } from "./WhychooseStyles";
import WhyCard from "./WhyCard";
import LicensedIcon from "../../assets/img/icons-why/licensed-icon.png";
import MasterIcon from "../../assets/img/icons-why/masters-icon.png";
import TrustedIcon from "../../assets/img/icons-why/trusted-icon.png";
import ScrollAnimation from "react-animate-on-scroll";

const listWhyChoose = [
  {
    id: 1,
    image: LicensedIcon,
    titleWhy: "Licensed",
    descWhy:
      "Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience.",
  },
  {
    id: 2,
    image: MasterIcon,
    titleWhy: "Masters",
    descWhy:
      "Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client. ",
  },
  {
    id: 3,
    image: TrustedIcon,
    titleWhy: "Trusted",
    descWhy:
      "We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.",
  },
];

function WhyChoose() {
  return (
    <SectionWhy id="feedback" className="hidden">
      <ScrollAnimation animateIn="fadeIn">
        <h2>why choose us</h2>
        <p>
          Nulla egestas sapien integer mi fermentum tellus tristique consequat
          pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
          prci eu magna in senectus sit eget justo eget.
        </p>
      </ScrollAnimation>
      <ContainerCard>
        {listWhyChoose.map(({ id, image, titleWhy, descWhy }) => (
          <WhyCard key={id} image={image} title={titleWhy} desc={descWhy} />
        ))}
      </ContainerCard>
    </SectionWhy>
  );
}

export default WhyChoose;
