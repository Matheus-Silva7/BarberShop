import { ContainerInfo } from "./AppStyles";
import HeaderBarber from "./components/HeaderBarber";
import InfoBox from "./components/InfoBox";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";


/* <FaMapMarkerAlt />, <FaPhoneAlt /> <FaClock /> */

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
      {listInfo.map(({id, iconInfo, info, desc})=>(
        <InfoBox key={id} icon={iconInfo} info={info} desc={desc} />
      ))}
      </ContainerInfo>
   
    </>
  );
}

export default App;
