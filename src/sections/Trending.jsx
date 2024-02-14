import { heading } from "../constants"
import Cars from "../components/Cars"

import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

import { trendings } from "../constants"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'

  
const Trending = () => {

  
  useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className="padding mt-10" id="new-cars" >
      <div>
        <div className="flex justify-between py-4 px-0 max-lg:mb-2 mb-5" data-aos='fade-up'>
          <h3 className="secTitle font-bold max-lg:mb-4">{heading[2].trending}</h3>

          <div className="gap-2 flex" data-aos='fade-up'>
            <BsArrowLeftShort className="arrow-direction"/>
            <BsArrowRightShort className="arrow-direction"/>
          </div>

        </div>

        {/* Trending Container */}
        <div className="grid items-center gap-8 max-lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-aos='fade-up'>
          <Cars carFeatures={trendings} carTrending/>
        </div>
      </div>
    </div>
  )
}

export default Trending
