import {
  FiSmartphone,
  FiMonitor,
  FiCamera,
  FiTruck,
  FiHome,
  FiWatch,
} from "react-icons/fi";
import { PiGameController } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";

export const categories = [
  {
    id: 1,
    slug: "phones",
    name: "Phones",
    icon: FiSmartphone,
    listings: 1200,
    color: "#EEF4FF"
  },
  {
    id: 2,
    slug: "laptops",
    name: "Laptops",
    icon: FiMonitor,
    listings: 540,
    color: "#F3F8EE"
  },
  {
    id: 3,
    slug: "gaming",
    name: "Gaming",
    icon: PiGameController,
    listings: 320,
    color: "#FFF4E8"
  },
  {
    id: 4,
    slug: "vehicles",
    name: "Vehicles",
    icon: FiTruck,
    listings: 430,
    color: "#FDF2F8"
  }
  // We'll add the remaining categories here.
];