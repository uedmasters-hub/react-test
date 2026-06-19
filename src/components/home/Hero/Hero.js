import "./Hero.css";
import Container from "../../common/Container";

function Hero() {
    return (
        <section className="hero">
            <Container>

                <div className="hero-content">

                    <span className="hero-badge">
                        🚀 India's Trusted Marketplace
                    </span>

                    <h1>
                        Buy.
                        <br />
                        Sell.
                        <br />
                        Swap.
                    </h1>

                    <p>
                        Discover Electronics, Vehicles, Furniture,
                        Fashion and much more from verified sellers.
                    </p>

                    <div className="hero-search">

                        <input
                            type="text"
                            placeholder="Search anything..."
                        />

                        <button>
                            Search
                        </button>

                    </div>

                    <div className="hero-tags">

                        <span>iPhone</span>
                        <span>MacBook</span>
                        <span>PS5</span>
                        <span>Cars</span>
                        <span>Furniture</span>

                    </div>

                </div>

            </Container>
        </section>
    );
}

export default Hero;