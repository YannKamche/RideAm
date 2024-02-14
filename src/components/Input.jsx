import { inputs } from "../constants"

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'

  const Input = () => {
    
  useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  return (
    <>
     {inputs.map(input => (
              <input className="w-full rounded-[10px] border border-solid border-secondary-color py-[5px] px-[10px] outline-none focus:border-primary-color transition-colors ease-in-out duration-500" data-aos='fade-up'
              key={input.placeholder} type={input.type} placeholder={input.placeholder}/>
            ))}
    </>
  )
}

export default Input
