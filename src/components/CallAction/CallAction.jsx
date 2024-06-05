import ScrollAnimation from "react-animate-on-scroll"
import ButtonMain from "../buttons/ButtonMain"
import { DivContent } from "./CallStyles"


function CallAction() {
  return (
    <ScrollAnimation animateIn="fadeIn">

    <DivContent>
      <h2>Experience the luxury of concierge barber services at your home</h2>
      <ButtonMain/>
    </DivContent>
    </ScrollAnimation>
  )
}

export default CallAction
