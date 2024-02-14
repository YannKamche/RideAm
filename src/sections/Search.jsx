
import Button from "../components/Button"
import Input from "../components/Input"
import { heading } from "../constants"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'

  

const Search = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <div className="py-8 padding">
      <div className="lg:px-24 xl:px-40">
        <h3 className="text-black-color text-2xl py-4 text-center font-bold" data-aos='fade-up'>{heading[1].search}</h3>
      

          <div className="grid gap-1 max-lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center" data-aos='fade-up'>
           <Input />
           <div data-aos='fade-up'>
            <Button label="Search" primaryBtn searchBtn/>
           </div>
            
          </div>

        </div>
    </div>
  )
}

export default Search
