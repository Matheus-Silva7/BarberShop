import { CardDiv } from "./WhychooseStyles"

function WhyCard({image, title, desc}) {
  return (
    <>
    <CardDiv>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </CardDiv>
    </>
  )
}

export default WhyCard
