import { FiHeart, FiMapPin } from "react-icons/fi";
import { BsPatchCheckFill } from "react-icons/bs";

import "./ProductCard.css";

function ProductCard({
  image,
  title,
  price,
  location,
  condition,
  seller,
  verified,
}) {
  return (
    <div className="product-card">

      <div className="product-image">

        <img src={image} alt={title} />

        <button className="wishlist-btn">
          <FiHeart />
        </button>

      </div>

      <div className="product-body">

        <span className="condition">
          {condition}
        </span>

        <h4>{title}</h4>

        <h3>₹ {price}</h3>

        <div className="product-footer">

          <span className="location">
            <FiMapPin />
            {location}
          </span>

          {verified && (
            <span className="verified">
              <BsPatchCheckFill />
              Verified
            </span>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;