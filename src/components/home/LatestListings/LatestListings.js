import "./LatestListings.css";

import SectionHeader from "../../common/SectionHeader";
import ProductCard from "../../common/ProductCard";

import latestListings from "./data";

function LatestListings() {

    return (

        <section className="latest-listings">

            <div className="container">

                <SectionHeader

                    badge="🔴 Live Marketplace"

                    title="Latest Listings"

                    subtitle="Fresh products listed by verified sellers across India."

                    buttonText="View All"

                />

                <div className="latest-grid">
                    {latestListings.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        variant="latest"
                        />
                    ))}
                </div>

            </div>

        </section>

    )

}

export default LatestListings;