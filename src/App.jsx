import { ContainerInfo } from "./AppStyles";
import AboutUs from "./components/about/AboutUs";
import HeaderBarber from "./components/header/HeaderBarber";
import InfoBox from "./components/header/InfoBox";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Services from "./components/servicesBarber/Services";
import CallAction from "./components/CallAction/CallAction";
import WhyChoose from "./components/whyChoose/WhyChoose";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import MapBarber from "./components/map/MapBarber";
import Footer from "./components/footer/Footer";

const listInfo = [
  {
    id: 1,
    iconInfo: <FaMapMarkerAlt />,
    info: "Address",
    desc: "3696 Lynden Road, Lefroy Ontario canada",
  },
  {
    id: 2,
    iconInfo: <FaPhoneAlt />,
    info: "phone",
    desc: "+62(123)-456-7890, +62(123)-456-7890",
  },
  {
    id: 3,
    iconInfo: <FaClock />,
    info: "hours",
    desc: "Mon – Sat: 9AM – 8PM Sun: 9AM – 6PM",
  },
];


function App() {
  return (
    <>
      <HeaderBarber />
      <ContainerInfo>
        {listInfo.map(({ id, iconInfo, info, desc }) => (
          <InfoBox key={id} icon={iconInfo} info={info} desc={desc} />
        ))}
      </ContainerInfo>
      <AboutUs />
      <Services/>  
      <CallAction/>  
      <WhyChoose/>
      <Review/>
      <Contact/>
      <MapBarber/>
      <Footer/>
    </>
  );
}

export default App;
