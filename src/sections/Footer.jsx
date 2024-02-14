import FooterGrid from "../components/FooterGrid"
import { footerContent } from '../constants'

import React, { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  
  useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])

  const year = new Date().getFullYear();

  return (
    <footer className="footerContainer container padding pt-16 max-lg:mt-4 mt-18" data-aos='fade-up'>
      <div className="grid items-center p-8 bg-grey-color rounded-xl gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FooterGrid footerContent={footerContent}/>
      </div>
      <div className="flex flex-col items-center justify-between text-center p-4 lg:flex-row">
        <p className="font-bold">{year} All rights reserved</p>
        <blockquote className="font-bold">RideAm</blockquote>
      </div>
    </footer>
  )
}

export default Footer
