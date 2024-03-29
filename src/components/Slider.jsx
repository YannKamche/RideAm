//import Swiper and required modules
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Slider = ({slides}) => {

  useEffect(() => {
    Aos.init(
      {
        duration: 1000
      }
    )
  }, [])

  return (
         <Swiper
         grabCursor={true}
         loop={true}
        effect={'creative'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
          creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[Autoplay, EffectCreative]}
        
         >
         
      {slides.map(slide => (
        <SwiperSlide >
            <div className='mx-auto'>
                <img src={slide} alt="" key={slide} />
            </div>
        </SwiperSlide>
          
        ))}
    </Swiper>
  )
}

export default Slider
