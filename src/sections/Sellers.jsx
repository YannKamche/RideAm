import { heading } from "../constants"
import AllSellers from "../components/AllSellers"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'

  
const Sellers = () => {

    useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className="sellers padding bg-grey-color mt-32">
      <div className="secContainer my-14 pt-10">
        <div className="grid items-center pt-3 space-y-2 mb-4" data-aos='fade-up'>
          <h3 className="secTitle font-bold">{heading[3].sellers}</h3>
          <p className="text-md">{heading[3].descr}</p>
        </div>

        <div className="grid items-center md:grid-cols-2" data-aos='fade-up' >
          <AllSellers />
        </div>
      </div>
    </div>
  )
}

export default Sellers
