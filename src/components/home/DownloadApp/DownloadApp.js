import "./DownloadApp.css";

import {
  FaApple,
  FaGooglePlay,
  FaMobileAlt,
} from "react-icons/fa";

import Container from "../../common/Container";

function DownloadApp() {
  return (
    <section className="download-app">

      <Container>

        <div className="download-wrapper">

          <div className="download-content">

            <span className="download-badge">
              📱 Mobile App
            </span>

            <h2>
              Buy, Sell & Swap
              <br />
              Anytime, Anywhere
            </h2>

            <p>
              Download the Swapp app and enjoy a faster,
              smarter and safer marketplace experience.
            </p>

            <div className="store-buttons">

              <button className="store-btn">

                <FaApple />

                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>

              </button>

              <button className="store-btn">

                <FaGooglePlay />

                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>

              </button>

            </div>

          </div>

          <div className="phone-preview">

            <div className="phone">

              <FaMobileAlt size={120} />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default DownloadApp;