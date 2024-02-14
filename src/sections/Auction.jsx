import { heading } from "../constants"
import Cars from "../components/Cars"

import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

import { auctions } from "../constants"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Auction = () => {

    useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])


  return (
    <div className="padding" id="auction">
      <div>
        <div className="flex justify-between py-4 px-0 max-lg:mt-12 mt:32 max-lg:mb-6 mb-10" data-aos='fade-up'>
          <h3 className="secTitle font-bold">{heading[4].auction}</h3>

          <div className="gap-2 flex">
            <BsArrowLeftShort className="arrow-direction"/>
            <BsArrowRightShort className="arrow-direction"/>
          </div>

        </div>

        {/* Auction Container */}
        <div className="grid items-center gap-8 max-lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-aos='fade-up'>
          <Cars carFeatures={auctions} carAuction/>
        </div>
      </div>
    </div>
  )
}

export default Auction
