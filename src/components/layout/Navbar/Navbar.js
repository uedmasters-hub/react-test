import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiBell,
  FiUser,
  FiMenu,
} from "react-icons/fi";

import "./Navbar.css";
import Container from "../../common/Container";

function Navbar() {
  return (
    <header className="navbar-wrapper">

      <Container>

        <nav className="navbar-custom">

          {/* Left */}

          <div className="navbar-left">

            <Link to="/" className="logo">
              <span>Swapp</span>
              <strong>.in</strong>
            </Link>

            <button className="category-btn">
              Categories
            </button>

          </div>

          {/* Center */}

          <div className="navbar-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search products, brands and categories..."
            />

          </div>

          {/* Right */}

          <div className="navbar-right">

            <Link to="/sell" className="sell-btn">
              Sell
            </Link>

            <Link to="/login">
              Login
            </Link>

            <FiHeart />

            <FiBell />

            <FiUser />

          </div>

          <button className="mobile-menu">
            <FiMenu />
          </button>

        </nav>

      </Container>

    </header>
  );
}

export default Navbar;