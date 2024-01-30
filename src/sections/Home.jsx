import Button from '../components/Button'
const Home = () => {
  return (
    <div>
      <div className="secContainer">
        <div className="homeText">
          <span className="">Meet your new car</span>
          <h1 className="homeTitle">
            Honda Civic Type R
          </h1>
          <div className="btn flex items-center ">
            <Button label="More Details" />
            <Button label="Test Drive" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
