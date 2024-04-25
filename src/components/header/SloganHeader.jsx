import { DivSlogan, TitleSlogan, SubtitleSlogan, DivButtons } from "./SloganStyles";
import ButtonMain from "../buttons/ButtonMain";
import ButtonSecond from "../buttons/ButtonSecond";


function SloganHeader() {
  return (
    <DivSlogan>
      <TitleSlogan>The ultimate convenience for busy people</TitleSlogan>
      <SubtitleSlogan>Experience the Convenience of In-Home Barber Services</SubtitleSlogan>
      <DivButtons>
      <ButtonMain/>
      <ButtonSecond/>
      </DivButtons>
    </DivSlogan>
  )
}

export default SloganHeader;