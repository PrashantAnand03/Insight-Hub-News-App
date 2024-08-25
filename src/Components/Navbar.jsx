import './navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = ({ setCategory, darkMode, setDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="badge bg-warning text-dark fs-4">Insight Hub</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link fs-5 me-4" to="/" onClick={() => setCategory("technology")} style={{ cursor: "pointer" }}>
                <span className="badge bg-dark">Technology</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 me-4" to="/" onClick={() => setCategory("business")} style={{ cursor: "pointer" }}>
                <span className="badge bg-dark">Business</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 me-4" to="/" onClick={() => setCategory("politics")} style={{ cursor: "pointer" }}>
                <span className="badge bg-dark">Politics</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 me-4" to="/" onClick={() => setCategory("sports")} style={{ cursor: "pointer" }}>
                <span className="badge bg-dark">Sports</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 me-4" to="/" onClick={() => setCategory("health")} style={{ cursor: "pointer" }}>
                <span className="badge bg-dark">Health</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 me-4" to="/about">
                <span className="badge bg-dark">About</span>
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-toggle d-flex align-items-center" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun /> : <FaMoon />}
              <span className="ms-2">{darkMode ? ' Light Mode' : ' Dark Mode'}</span>
            </button>
            <form className="d-flex ms-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
