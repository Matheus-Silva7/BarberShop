import { DivSlogan, DivButtons } from "./SloganStyles";
import ButtonMain from "../buttons/ButtonMain";
import ButtonSecond from "../buttons/ButtonSecond";


function SloganHeader() {
  return (
    <DivSlogan>
      <h1>The ultimate convenience for busy people</h1>
      <p>Experience the Convenience of In-Home Barber Services</p>
      <DivButtons>
      <ButtonMain/>
      <ButtonSecond/>
      </DivButtons>
    </DivSlogan>
  )
}

export default SloganHeader;