import { image1, image2, image3,image4, trending1, trending2, trending3, trending4, trending5, trending6 } from "../assets/images";
import { toyota, renault, volkswagen, jaguar} from "../assets/images";

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
    {sellers: "Explore top sellers in town", descr:"Yann Kamche hods the Guiness World Record for being the greatest salesman in the world"}
];

export const trendings = [
    {img: trending1, alt: "img-1", title: "Used 2019 Audi S4 Premium Plus", miles: "11457", AWD: "AWD 4-Cylinder Turbo", price: "$41,200", seller: "Best Seller"},
    {img: trending2, alt: "img-2", title: "Used 2019 Audi S4 Premium Plus", miles: "11457", AWD: "AWD 4-Cylinder Turbo", price: "$41,200", seller: "Best Seller"},
    {img: trending3, alt: "img-3", title: "Used 2019 Audi S4 Premium Plus", miles: "11457", AWD: "AWD 4-Cylinder Turbo", price: "$41,200", seller: "Best Seller"},
    
];

export const sellers = [
    {img: toyota, alt: "brand-1", brandName: "Toyota", infoDesc: "from $100k"},
    {img: renault, alt: "brand-2", brandName: "Mitsubishi", infoDesc: "from $250k"},
    {img: volkswagen, alt: "brand-3", brandName: "Wolkswagen", infoDesc: "from $70k"},
    {img: jaguar, alt: "brand-4", brandName: "Jaguar", infoDesc: "from $40k"}
]