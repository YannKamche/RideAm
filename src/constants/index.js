import { image1, image2, image3,image4, trending1, trending2, trending3 } from "../assets/images";
import { toyota, renault, volkswagen, jaguar, mercedes} from "../assets/images";
import { auction1, auction2, auction3, auction4, auction5, auction6 } from "../assets/images";
import { review1, review2, review3, review4, customer1, customer2, customer3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#new-cars", label: "New Cars" },
    { href: "#auction", label: "Auction" },
    { href: "#for-sale", label: "For Sale" },
];

export const heroImage = [image1, image2, image3, image4]

export const inputs = [
    {type: "text", placeholder: "Type"},
    {type: "number", placeholder: "Year"},
    {type: "text", placeholder: "Model"},
    {type: "number", placeholder: "Price" }
];

export const heading = [
    {home: "Honda Civic Type R", subTitle: "Meet your new car"},
    {search: "Which vehicle you are looking for ?"},
    {trending: "Trending Near You"},
    {sellers: "Explore top sellers in town", descr:"Mike Burningham holds the Guiness World Record for being the greatest salesman in the world"},
    {auction: "Active Auctions"},
    {review: "Recent Reviews"}
];

export const trendings = [
    {img: trending1, alt: "img-1", title: "Brand New Honda Civic 2024", miles: "11000", AWD: "AWD 4-Cylinder Turbo", price: "$75,500", seller: "Best Seller"},
    {img: trending2, alt: "img-2", title: "Used Audi 2024 VR Model", miles: "6000", AWD: "AWD 4-Cylinder Turbo", price: "$100,000", seller: "Best Seller"},
    {img: trending3, alt: "img-3", title: "New Mercedez Benz Hummer 2024", miles: "15500", AWD: "AWD 4-Cylinder Turbo", price: "$50,000", seller: "Best Seller"},
    
];

export const sellers = [
    {img: toyota, alt: "brand-1", brandName: "Toyota", infoDesc: "from $100k"},
    {img: renault, alt: "brand-2", brandName: "Mitsubishi", infoDesc: "from $250k"},
    {img: volkswagen, alt: "brand-3", brandName: "Wolkswagen", infoDesc: "from $70k"},
    {img: mercedes, alt: "brand-4", brandName: "Mercedes", infoDesc: "from $40k"}
]

export const auctions = [
    {img: auction1, alt: "img-1", title: "Chevraultet Edition 2019", miles: "12000", AWD: "AWD 4-Cylinder Turbo", price: "$41,500", seller: "Buy Now"},
    {img: auction2, alt: "img-2", title: "Honda Civic R 2019", miles: "20000", AWD: "AWD 4-Cylinder Turbo", price: "$30,000", seller: "Buy Now"},
    {img: auction3, alt: "img-3", title: "Honda Civic R 2021", miles: "25000", AWD: "AWD 4-Cylinder Turbo", price: "$60,000", seller: "Buy Now"},
    {img: auction4, alt: "img-4", title: "Ferrari GT4 brand new", miles: "25000", AWD: "AWD 4-Cylinder Turbo", price: "$40,000", seller: "Buy Now"},
    {img: auction5, alt: "img-5", title: "Honda Civic R", miles: "25000", AWD: "AWD 4-Cylinder Turbo", price: "$50,000", seller: "Buy Now"},
    {img: auction6, alt: "img-6", title: "Honda Civic R la Pulga", miles: "25000", AWD: "AWD 4-Cylinder Turbo", price: "$30,000", seller: "Buy Now"},
      
];

export const reviews = [
    {img: review1, alt: "car-image1", title: "2023 Cadiallac", desc: "Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable and attractive", reviewerImg: customer1, reviewerAlt: "review-image1", reviewerName: "John Anderson", extraInfo: "Chief Editor" },
    {img: review2, alt: "car-image1", title: "2023 Cadiallac", desc: "They are the best you will ever see on the autombile industry ever seen. Ultra comfortable and spatious", reviewerImg: customer2, reviewerAlt: "review-image1", reviewerName: "Emily Grant", extraInfo: "Senior Officer" },
    {img: review3, alt: "car-image1", title: "2023 Cadiallac", desc: "Perfect customer service. The cars are intact, brand new and at the top of their form", reviewerImg: customer3, reviewerAlt: "review-image1", reviewerName: "Mickel LeBeau", extraInfo: "Secretary General" },
]