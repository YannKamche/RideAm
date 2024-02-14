import { sellers } from "../constants"


import React, {useEffect} from "react"

import Aos from 'aos'
import 'aos/dist/aos.css'



const AllSellers = () => {

    useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  }, [])
  return (
    <>
       {sellers.map(seller => (
         <div className="sellContainer flex items-center py-2 px-0 rounded-sm gap-2 transition-all duration-500 ease-in-out hover:translate-x-4 group cursor-pointer">
            <div className="imgDiv flex items-center w-12 h-12 object-cover rounded-sm p-2 group-hover:bg-black-color">
                <img src={seller.img} alt={seller.alt} />
            </div>
            <span className="info p-2">
                <h4 className="text-black-color text-xl font-bold">{seller.brandName}</h4>
                <p className="text-sm font-poppins group-hover:text-lg duration-200 ease-in-out group-hover:animate-bounce">{seller.infoDesc}</p>
            </span>
           
        </div>
       ))}; 
    </>
  );
};

export default AllSellers;
