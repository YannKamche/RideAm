const Cars = ({carFeatures}) => {

  return (
    <>
      {carFeatures.map(feature => (
        <div className="grid items-center transition duration-300 ease-in-out hover:-translate-y-2 shadow-lg p-3">
              <div className="w-[100%] h-[200px] lg:h-[270px] overflow-hidden rounded-xl border-solid border-[5px] hover:border-primary-color">
                  <img className="object-cover w-full h-full" src={feature.img} alt={feature.alt} />
              </div>

              <h5 className="text-black-color text-base pt-3">{feature.title}</h5>
              <span className="text-black-color text-sm opacity-70">{feature.miles}</span>
              <span className="py-4 px-0 text-black-color font-semibold text-base">{feature.AWD}</span>

              <div className="flex gap-4">
                  <span className="price bg-secondary-color text-primary-color hover:bg-primary-color hover:text-white">{feature.price}</span>
                  <span className="price bg-grey-color text-text-color hover:bg-text-color hover:text-white">{feature.seller}</span>
              </div>
        </div>
      ))}
    </>
  )
}

export default Cars
