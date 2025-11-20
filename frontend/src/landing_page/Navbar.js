import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./authContext";
import api from "../api";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;
  const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-3">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={DASHBOARD_URL}
                      target="_self"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          await api.get("/logout", {
                            withCredentials: true,
                          });
                          setUser(null); // clear React state
                          window.location.href = FRONTEND_URL; // redirect to homepage
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              <li
                className="nav-item d-flex align-items-center ms-5"
                ref={dropdownRef}
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-bars" onClick={toggleDropdown}></i>
                {isDropdownOpen && (
                  <div
                    classNameName="dropdown-menu show"
                    style={{
                      position: "absolute",
                      top: "35px",
                      right: "0",
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      width: "160px",
                      zIndex: "999",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: "10px",
                      }}
                    >
                      <li style={{ padding: "8px 0", cursor: "pointer" }}>
                        ⚙️ Settings
                      </li>
                      <li style={{ padding: "8px 0", cursor: "pointer" }}>
                        💬 Help
                      </li>
                      <li style={{ padding: "8px 0", cursor: "pointer" }}>
                        🔔 Notifications
                      </li>
                      <hr />
                      <li style={{ padding: "8px 0", cursor: "pointer" }}>
                        📞 Contact Us
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
