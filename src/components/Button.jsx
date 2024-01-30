const Button = ({label}) => {
  return (
    <button className="
    py-[3px] 
    px-3
    
    bg-primary-color
     text-white-color
    rounded-[3px]
   
    cursor-pointer
    text-[14px]
    hover:bg-secondary-color
    hover:text-black-color
    ">
      {label}
    </button>
  )
}

export default Button
