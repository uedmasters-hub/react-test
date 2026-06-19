import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../../common/Container";
import footerLinks from "./data";

function Footer() {
  return (
    <footer className="footer">

      <Container>

        <div className="footer-top">

          <div className="footer-brand">

            <h2>Swapp.</h2>

            <p>
              India's trusted marketplace to buy, sell and swap
              electronics, vehicles, furniture and more.
            </p>

            <div className="social-links">

              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaLinkedinIn /></a>
              <a href="/"><FaYoutube /></a>
              <a href="/"><FaXTwitter /></a>

            </div>

          </div>

          <div className="footer-links">

            <div>

              <h4>Company</h4>

              {footerLinks.company.map((item) => (
                <a href="/" key={item}>{item}</a>
              ))}

            </div>

            <div>

              <h4>Marketplace</h4>

              {footerLinks.marketplace.map((item) => (
                <a href="/" key={item}>{item}</a>
              ))}

            </div>

            <div>

              <h4>Support</h4>

              {footerLinks.support.map((item) => (
                <a href="/" key={item}>{item}</a>
              ))}

            </div>

            <div>

              <h4>Legal</h4>

              {footerLinks.legal.map((item) => (
                <a href="/" key={item}>{item}</a>
              ))}

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Swapp. All rights reserved.
          </p>

          <span>
            Made with ❤️ in India
          </span>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;