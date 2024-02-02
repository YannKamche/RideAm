import { inputs } from "../constants"
import Button from "../components/Button"

const Search = () => {

  return (
    <div className="py-8 px-1">
      <div className="">
        <h3 className="text-black-color text-2xl py-4 text-center font-bold">Which vehicle you are looking for?</h3>
      

          <div className="grid gap-1 grid-cols-2 items-center px-4">
            {inputs.map(input => (
              <input className="w-full rounded-[10px] border border-solid border-secondary-color py-[5px] px-[10px] outline-none focus:border-primary-color transition-colors ease-in-out duration-500"
              key={input.placeholder} type={input.type} placeholder={input.placeholder}/>
            ))}

            <Button label="Search" primaryBtn searchBtn/>
  
          </div>

        </div>
    </div>
  )
}

export default Search
