import React from 'react'


const FooterGrid = ({footerContent}) => {
  return (
    <>
     {footerContent.map(footer => (
         <div key={footer.title}>
          <span className="block pb-2 text-base text-black-color font-bold">
            {footer.title}
          </span>
          <ul className="grid items-center gap-1">
            {footer.link.map(link => (
                <li key={footer.title} className='text-text-color hover:text-black-color hover:translate-x-1 transition duration-300 cursor-pointer ease-in-out'>{link}</li>
            ))}
          </ul>
        </div>
     ))}
    </>
  )
}

export default FooterGrid
