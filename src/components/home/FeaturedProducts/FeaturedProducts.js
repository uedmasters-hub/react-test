import "./FeaturedProducts.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { products } from "../../../constants/products";
import SectionHeader from "../../common/SectionHeader/SectionHeader";
import Container from "../../common/Container";

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <Container>

        <div className="section-title">

          <SectionHeader
              badge="Featured"
              title="Featured Products"
              subtitle="Hand-picked listings from verified sellers."
              actionText="View All"
          />

        </div>

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}

export default FeaturedProducts;