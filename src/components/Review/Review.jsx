import GoogleCard from "./GoogleCard"
import { SectionReview } from "./ReviewStyles"
import ReviewCard from "./TripadCard"
import UserReview from "./UserReview"

function Review() {
  return (
    <SectionReview>
      <GoogleCard/>
      <UserReview/>
      <ReviewCard/>
    </SectionReview>
  )
}

export default Review