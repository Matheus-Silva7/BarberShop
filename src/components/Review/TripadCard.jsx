import TripadIcon from "../../assets/img/img-review/tripadvisor-icon.png"
import Stars from "../../assets/img/img-review/stars.png"
import { DivCard } from "./ReviewStyles"


function TripadCard() {
  return (
    <DivCard>
      <img src={TripadIcon} alt="" />
      <h3>tripadvisor</h3>
      <h2>5.0</h2>
      <img src={Stars} alt="" />
      <p>196 reviews</p>
    </DivCard>
  )
}

export default TripadCard
