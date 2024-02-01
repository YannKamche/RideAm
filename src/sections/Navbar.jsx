import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants"
import { headerLogo5 } from "../assets/icons"
import Button from "../components/Button"

import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

  //Sticky navbar on scroll pass the navbar height
 const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navHeight = navRef.current.getBoundingClientRect().height;
      const isStickyNow = offset > navHeight;

      setIsSticky(isStickyNow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Hold navbar state
  const [isShowNav, setIsShowNav] = useState(false);

  //Toggle navbar
  const toggleNavbar = () => {
    setIsShowNav(!isShowNav)
  }

  //Remove navbar on click on link
  const removeNavbar = () => {
    setIsShowNav(false)
  }


  return (
    <header 
      ref={navRef}
      className={`container w-full ${isSticky ? "sticky top-0 shadow-lg z-50 bg-secondary-color": ""}`}>
      <nav className="flex items-center justify-between w-full py-4 max-lg:px-4 px-8 ">
        <div className="">
          <img src={headerLogo5} alt="logo-image" width={50}/>
        </div>

        <div className={`max-lg:absolute
          max-lg:bg-secondary-color 
          max-lg:w-[80%] 
          ${
            isShowNav ? "max-lg:translate-y-full max-lg:transition-all ease-in-out duration-500": 'max-lg:-translate-y-full transition-all duration-500 ease-in-out'
          } 
          max-lg:left-1/2
          max-lg:right-1/2
          max-lg:-translate-x-1/2
          max-lg:rounded-[10px] 
          max-lg:text-center
          max-lg:p-8
          max-lg:z-50
          max-lg:ease-in-out
          `
        }>
          <ul className="flex flex-col items-center lg:flex-row lg:gap-10">
              {navLinks.map(link => (
              <li onClick={removeNavbar}
              className="py-2 px-4 rounded-xl cursor-pointer hover:bg-primary-color ease-in duration-300 transition-all lg:py-[.3rem] lg:px-4 lg:rounded-[3px] group" 
                key={link.label}
              >
                <a href={link.href} className="text-[15px] group-hover:text-white-color">{link.label}</a>
              </li>
            ))}
          </ul>

          <IoIosCloseCircle onClick={toggleNavbar}
          className="icon
          max-lg:absolute
          max-lg:-bottom-[15px]
          max-lg:left-1/2
          max-lg:right-1/2
          max-lg:-translate-x-1/2
        max-lg:bg-secondary-color 
          max-lg:text-primary-color
          max-lg:p-[3px]
          max-lg:rounded-[50%]
          max-lg:scale-100
          max-lg:hover:scale-125
          max-lg:hover:text-red-500
          max-lg:sizeClose
          lg:hidden
          "/>
        </div>
        
        <div className="flex items-center gap-2">
          <Button label="Sign Up" signUp primaryBtn/>
           <TbGridDots onClick={toggleNavbar}
           className="icon
           bg-none
           text-primary-color
           sizeMenu
           lg:hidden"/>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
