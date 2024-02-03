import { heading } from "../constants"
import AllSellers from "../components/AllSellers"
const Sellers = () => {
  return (
    <div className="sellers padding bg-grey-color">
      <div className="secContainer my-14">
        <div className="grid secHeading pt-3">
          <h3 className="secTitle font-bold">{heading[3].sellers}</h3>
          <p>{heading[3].descr}</p>
        </div>

        <div >
          <AllSellers />
        </div>
      </div>
    </div>
  )
}

export default Sellers
