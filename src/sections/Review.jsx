import { heading } from "../constants"
import ReviewCard from "../components/ReviewCard"

import { reviews } from "../constants"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'


import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
const Review = () => {

      useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className="padding mt-32" id="reviews">
      <div className="secContainer flex justify-between items-center mb-10">
        <div className="flex justify-between py-4 px-0" data-aos='fade-up'>
          <h3 className="secTitle font-bold">{heading[5].review}</h3>
        </div>

        <div className="gap-2 flex" data-aos='fade-up'>
            <BsArrowLeftShort className="arrow-direction"/>
            <BsArrowRightShort className="arrow-direction"/>
          </div>
      </div>

      {/* Review Container */}
      <div className="reviewContainer grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos='fade-up'>

        <ReviewCard reviewFeatures={reviews}/>
      </div>
    </div>
  )
}

export default Review
