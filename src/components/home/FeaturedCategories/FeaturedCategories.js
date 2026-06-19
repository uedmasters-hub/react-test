import SectionHeader from "../../common/SectionHeader/SectionHeader";
import "./FeaturedCategories.css";
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
import Container from "../../common/Container";

const categories = [
  {
    name: "Phones",
    icon: <FiSmartphone />,
    count: "1200+"
  },
  {
    name: "Laptops",
    icon: <FiMonitor />,
    count: "540+"
  },
  {
    name: "Gaming",
    icon: <PiGameController />,
    count: "320+"
  },
  {
    name: "Vehicles",
    icon: <FiTruck />,
    count: "430+"
  },
  {
    name: "Cameras",
    icon: <FiCamera />,
    count: "210+"
  },
  {
    name: "Wearables",
    icon: <FiWatch />,
    count: "180+"
  },
  {
    name: "Furniture",
    icon: <FiHome />,
    count: "650+"
  },
  {
    name: "Fashion",
    icon: <GiClothes />,
    count: "980+"
  }
];

function FeaturedCategories() {
  return (
    <section className="featured-categories">

      <Container>

        <div className="section-header">

          <SectionHeader
              badge="Explore"
              title="Browse Categories"
              subtitle="Discover thousands of verified products across multiple categories."
              actionText="View All"
          />
          
        </div>

        <div className="category-grid">

          {categories.map((category) => (

            <div className="category-card" key={category.name}>

              <div className="category-icon">
                {category.icon}
              </div>

              <h4>{category.name}</h4>

              <span>{category.count} Listings</span>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default FeaturedCategories;