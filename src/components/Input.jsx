import { inputs } from "../constants"
const Input = () => {
  return (
    <>
     {inputs.map(input => (
              <input className="w-full rounded-[10px] border border-solid border-secondary-color py-[5px] px-[10px] outline-none focus:border-primary-color transition-colors ease-in-out duration-500"
              key={input.placeholder} type={input.type} placeholder={input.placeholder}/>
            ))}
    </>
  )
}

export default Input
