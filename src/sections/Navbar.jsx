import { navLinks } from "../constants"
import { headerLogo5 } from "../assets/icons"
import Button from "../components/Button"

import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
    <header className="fixed w-full z-50 shadow-lg">
      <nav className="flex items-center justify-between w-full py-3 px-8 md:py-5 md:px-10">
        <div className="">
          <img src={headerLogo5} alt="logo-image" width={50}/>
        </div>

        <div className="max-lg:absolute
          bg-secondary-color 
          w-[80%] 
          -top-[100rem]
          left-1/2
          right-1/2
          -translate-x-1/2
          rounded-[10px] 
          text-center
          p-8
          z-50
          ease-in-out
          ">
          <ul className="flex flex-col items-center">
              {navLinks.map(link => (
              <li className="py-2 px-4 rounded-xl cursor-pointer hover:bg-primary-color ease-in duration-300 transition-all group" >
                <a href={link.href} className="text-[15px] group-hover:text-white-color">{link.label}</a>
              </li>
            ))}
          </ul>

          <IoIosCloseCircle className="icon
          absolute
          -bottom-[15px]
          left-1/2
          right-1/2
          -translate-x-1/2
          bg-secondary-color 
          text-primary-color
          p-[3px]
          rounded-[50%]
          scale-100
          hover:scale-125
          hover:text-red-500
          sizeClose
          "/>
        </div>
        
        <div className="flex gap-2">
          <Button label="Sign Up"/>
           <TbGridDots className="icon
           bg-none
           text-primary-color
           sizeMenu"/>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
