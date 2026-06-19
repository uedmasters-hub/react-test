import iphone from "../images/products/iphone.jpg";
import macbook from "../images/products/macbook.jpg";
import ps5 from "../images/products/ps5.jpg";
import car from "../images/products/car.jpg";

export const products = [
  {
    id: 1,
    image: iphone,
    title: "Apple iPhone 15 Pro",
    price: "72,999",
    location: "Delhi",
    condition: "Excellent",
    seller: "John",
    verified: true,
  },
  {
    id: 2,
    image: macbook,
    title: "MacBook Air M3",
    price: "94,500",
    location: "Mumbai",
    condition: "Like New",
    seller: "Rahul",
    verified: true,
  },
  {
    id: 3,
    image: ps5,
    title: "Sony PlayStation 5",
    price: "39,999",
    location: "Bangalore",
    condition: "Used",
    seller: "Amit",
    verified: false,
  },
  {
    id: 4,
    image: car,
    title: "Hyundai Creta SX",
    price: "14,20,000",
    location: "Gurugram",
    condition: "2023",
    seller: "Karan",
    verified: true,
  },
];