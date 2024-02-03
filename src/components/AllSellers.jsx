import { sellers } from "../constants"
const AllSellers = () => {
  return (
    <>
       {sellers.map(seller => (
         <div className="sellContainer flex items-center py-2 px-0 rounded-sm gap-4 transition-all duration-500 ease-in-out">
            <div className="imgDiv flex items-center w-12 h-12 object-cover rounded-sm p-2">
                <img src={seller.img} alt={seller.alt} />
            </div>
            <span className="info p-2">
                <h4 className="text-black-color text-xl font-bold">{seller.brandName}</h4>
            </span>
            <p className="text-sm">{seller.infoDesc}</p>
        </div>
       ))}; 
    </>
  );
};

export default AllSellers;
