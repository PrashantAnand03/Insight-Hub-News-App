import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main content */}
      <main className="flex-fill">{/* Your main content goes here */}</main>

      {/* Footer */}
      <footer className="py-3 my-4 bg-dark text-white">
        <div className="container">
          <div className="row">
            {/* Left Side: Insight Hub and Social Links */}
            <div className="col-md-3">
              <h3>
                <span className="badge bg-warning text-dark fs-5">
                  Insight Hub
                </span>
              </h3>
              <p className="follow-fnt">Follow us on our socials:</p>
              <div className="d-flex gap-2">
                <a
                  href="https://www.linkedin.com/in/prashantanand03/"
                  className="text-white social-icon-circle"
                >
                  <FontAwesomeIcon icon={faLinkedin} bounce size="lg" />
                </a>
                <a
                  href="https://github.com/PrashantAnand03"
                  className="text-white social-icon-circle"
                >
                  <FontAwesomeIcon icon={faGithub} bounce size="lg" />
                </a>
                <a
                  href="https://x.com/PrashanAnand"
                  className="text-white social-icon-circle"
                >
                  <FontAwesomeIcon icon={faXTwitter} bounce size="lg" />
                </a>
                <a
                  href="mailto:prashantanand033@gmail.com"
                  className="text-white social-icon-circle"
                >
                  <FontAwesomeIcon icon={faEnvelope} bounce size="lg" />
                </a>
              </div>
            </div>

            {/* Middle: Navigation Links */}
            <div className="col-md-6">
              <ul className="line-height nav justify-content-center border-bottom pb-1 mb-3">
                <li className="nav-item">
                  <a href="/" className="nav-link px-2 text-white me-2"
                  onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item"
                onClick={() => window.scrollTo(0, 0)}
                >
                  <Link
                    to="/newsletter"
                    className="nav-link px-2 text-white me-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Newsletter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link px-2 text-white me-2"
                  onClick={() => window.scrollTo(0, 0)}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/faqs" className="nav-link px-2 text-white me-2"
                  onClick={() => window.scrollTo(0, 0)}
                  >
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link px-2 text-white me-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Side: Subscribe Form */}
            <div className="ftr-right col-md-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what&apos;s new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <button className="btn btn-danger animation" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="text-center text-white mt-4">
            © Copyright Insight Hub, crafted by Prashant Anand.{" "}
            <span className="text-heart">All rights reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
