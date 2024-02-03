import { inputs } from "../constants"
import Button from "../components/Button"
import Input from "../components/Input"
import { heading } from "../constants"

const Search = () => {

  return (
    <div className="py-8 padding">
      <div className="lg:px-24 xl:px-40">
        <h3 className="text-black-color text-2xl py-4 text-center font-bold">{heading[1].search}</h3>
      

          <div className="grid gap-1 grid-cols-2 items-center">
           <Input />
            <Button label="Search" primaryBtn searchBtn/>
          </div>

        </div>
    </div>
  )
}

export default Search
