import "./PopularBrands.css";

import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";

import brands from "./data";

function PopularBrands() {
  return (
    <section className="popular-brands">

      <Container>

        <SectionHeader
          badge="Popular Brands"
          title="Shop Your Favourite Brands"
          subtitle="Trusted brands available from verified sellers."
        />

        <div className="brand-slider">

          <div className="brand-track">

            {[...brands, ...brands].map((brand, index) => (
              <div
                className="brand-card"
                key={index}
              >
                {brand}
              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}

export default PopularBrands;