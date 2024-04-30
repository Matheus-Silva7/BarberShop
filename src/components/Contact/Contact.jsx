import { SectionContact, DivContactText,DivInfoContact } from "./ContactStyles"
import { FaEnvelope, FaPhoneAlt  } from "react-icons/fa";
import FormContact from "./FormContact";


function Contact() {
  return (
    <SectionContact>
      <DivContactText>
        <h2>make an <br/> appointment</h2>
        <p>Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo</p>

        <DivInfoContact>
          <FaPhoneAlt className="icon-contact"/>
          <div>
            <h4>Give us a Call</h4>
            <p>(475) 453 - 3465</p>
          </div>
        </DivInfoContact>

        <DivInfoContact>
          <FaEnvelope className="icon-contact"/>
          <div>
            <h4>Send us an email</h4>
            <p>hello@example.com</p>
          </div>
        </DivInfoContact>
      </DivContactText>
      <FormContact/>
    </SectionContact>
  )
}

export default Contact
