import ProductCard from "../../common/ProductCard/ProductCard";

import iphone from "../../../images/products/iphone.jpg";

function HeroPreview() {

    const featuredProduct = {

        image: iphone,

        title: "Apple iPhone 16 Pro",

        price: "72,999",

        location: "New Delhi",

        condition: "Like New",

        verified: true

    };

    return (

        <div className="hero-preview">

            <ProductCard {...featuredProduct} />

        </div>

    );

}

export default HeroPreview;