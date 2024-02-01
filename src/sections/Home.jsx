import Button from "../components/Button"
import { heroImage } from "../constants"

//import Slider component
import Slider from "../components/Slider"

const Home = () => {

  return (
     <div className="max-lg:pt-8 lg:pt-8 w-full" id="home">
      <div className="py-0 px-[1.5rem] text-center grid max-lg:gap-8 lg:gap-10">
        <div>
          <span className="max-lg:text-[18px] lg:text-[25px] text-text-color font-semibold">Meet your new car</span>
          <h1 className="max-lg:text-[32px] lg:text-[45px] text-black font-extrabold">
            Honda Civic Type R
          </h1>
          <div className="btn flex items-center justify-center gap-6 lg:mt-5">
            <Button label="More Details" normalBtn />
            <Button label="Test Drive" primaryBtn/>
          </div>
        </div>
        <div className="m-auto max-md:w-[290px] max-lg:w-[495px] max-xl:w-[900px] xl:w-[1000px] xl:translate-x-3">
          <Slider slides={heroImage}/>
        </div>
        
                    
        </div>
      </div>
  )
}

export default Home
