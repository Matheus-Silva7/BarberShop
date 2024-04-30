import GoogleIcon from "../../assets/google-icon.png"
import Stars from "../../assets/stars.png"
import { DivCard } from "./ReviewStyles"


function GoogleCard() {
  return (
    <DivCard>
      <img className="logo-icon" src={GoogleIcon} alt="" />
      <h3>Google</h3>
      <h2>4.9</h2>
      <img src={Stars} alt="" />
      <p>196 reviews</p>
    </DivCard>
  )
}

export default GoogleCard