import "./Testimonials.css";

import { FaStar } from "react-icons/fa";

import Container from "../../common/Container";
import SectionHeader from "../../common/SectionHeader";

import testimonials from "./data";

function Testimonials() {
  return (
    <section className="testimonials">

      <Container>

        <SectionHeader
          badge="Testimonials"
          title="Loved by Buyers & Sellers"
          subtitle="Real experiences from our growing community."
        />

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <div
              className="testimonial-card"
              key={item.id}
            >

              <div className="testimonial-header">

                <div className="avatar">
                  {item.avatar}
                </div>

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.location}</span>

                </div>

              </div>

              <div className="rating">

                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <small>
                Purchased: {item.product}
              </small>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Testimonials;