import { heading } from "../constants"
import ReviewCard from "../components/ReviewCard"

import { reviews } from "../constants"

import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
const Review = () => {
  return (
    <div className="padding mt-16" id="reviews">
      <div className="secContainer flex justify-between items-center">
        <div className="flex justify-between py-4 px-0">
          <h3 className="secTitle font-bold">{heading[5].review}</h3>
        </div>

        <div className="gap-2 flex">
            <BsArrowLeftShort className="arrow-direction"/>
            <BsArrowRightShort className="arrow-direction"/>
          </div>
      </div>

      {/* Review Container */}
      <div className="reviewContainer grid items-center gap-6 md:grid-cols-2 lg:grid-cols-3">

        <ReviewCard reviewFeatures={reviews}/>
      </div>
    </div>
  )
}

export default Review
