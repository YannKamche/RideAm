import Button from "../components/Button"
import { heroImage } from "../constants"

//import Slider component
import Slider from "../components/Slider"
import { heading } from "../constants"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])


  return (
     <div className="pt-8 w-full padding" id="home">
      <div className="py-0 text-center grid max-lg:gap-8 lg:gap-10">
        <div data-aos='fade-up'>
          <span className="max-lg:text-[18px] lg:text-[25px] text-text-color font-semibold">{heading[0].subTitle}</span>
          <h1 className="max-lg:text-[32px] lg:text-[45px] text-black-color font-extrabold">
            {heading[0].home}
          </h1>
          <div className="btn flex items-center justify-center gap-6 lg:mt-5">
            <div data-aos='fade-right'>
               <Button label="More Details" normalBtn />
            </div>
            <div data-aos='fade-left'>
                <Button label="Test Drive" primaryBtn/>
            </div>
            
          </div>
        </div>
        <div data-aos='fade-down-right'>
           <div className="m-auto max-md:w-[290px] max-lg:w-[495px] max-xl:w-[900px] xl:w-[1000px] xl:translate-x-3">
          <Slider slides={heroImage}/>
        </div>
        </div>
       
        
                    
        </div>
      </div>
  )
}

export default Home
