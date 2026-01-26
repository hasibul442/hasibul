import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import style from "./topbar2.module.css";
function TopBar2() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    // Scroll to hash on mount and hash change
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [window.location.hash]);

  const handleDropdownClick = (path, hash) => {
    navigate(path);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className={style.navBar_Background}>
      <div className="container">
        <nav className={`${style.navbar1} navbar navbar-expand-lg`} id="navbar">
          <a className="navbar-brand text-light" href="/">
            <img src="/Logo.svg" alt="logo" style={{ height: "35px" }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item dropdown`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <div
                  className={`dropdown-menu ${style.dropdownMenu} ${theme === "dark" ? style.darkTheme : style.lightTheme}`}
                  aria-labelledby="aboutDropdown"
                >
                  <a
                    className={`dropdown-item ${style.dropdownItem}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownClick("/about", "#about-me");
                    }}
                  >
                    About me
                  </a>
                  <a
                    className={`dropdown-item ${style.dropdownItem}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownClick("/about", "#skills");
                    }}
                  >
                    Skills / Tech Stack
                  </a>
                  <a
                    className={`dropdown-item ${style.dropdownItem}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownClick("/about", "#interests");
                    }}
                  >
                    Interests
                  </a>
                  <a
                    className={`dropdown-item ${style.dropdownItem}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownClick("/about", "#testimonials");
                    }}
                  >
                    Testimonials
                  </a>
                </div>
              </li>
              {/* <li><Link className="nav-link" to="/resume">Resume</Link></li> */}
              {/* <li><Link className="nav-link" to="/services">Services</Link></li> */}
              <li>
                <Link className="nav-link" to="/experience">
                  Experience
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/certifications">
                  Certifications
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TopBar2;
