import { heading } from "../constants"
import Cars from "../components/Cars"

import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

import { trendings } from "../constants"

const Trending = () => {

  return (
    <div className="padding">
      <div>
        <div className="flex justify-between py-4 px-0">
          <h3 className="secTitle">{heading[2].trending}</h3>

          <div className="gap-2 flex">
            <BsArrowLeftShort className="arrow-direction"/>
            <BsArrowRightShort className="arrow-direction"/>
          </div>

        </div>

        <div className="grid items-center gap-8 max-lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Cars carFeatures={trendings}/>
        </div>
      </div>
    </div>
  )
}

export default Trending
