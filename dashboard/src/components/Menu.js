import React, { useContext, useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import AuthContext, { AuthProvider } from "./authContext";
import api from "../api";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const dropdownRef = useRef(null);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;
  const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

  return (
    <div className="menu-container">
      <Link style={{ textDecoration: "none" }} to={FRONTEND_URL}>
        <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          ref={dropdownRef}
          className="profile"
          onClick={handleProfileClick}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <div
            className="avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#007bff",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              fontWeight: "bold",
              marginRight: "10px",
              textTransform: "uppercase",
            }}
          >
            {user?.username ? user.username.charAt(0) : "U"}
          </div>
          <p className="username" style={{ margin: 0 }}>
            {user?.username || "User"}
          </p>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "60px",
                right: "0",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                width: "160px",
                zIndex: "10",
              }}
            >
              <ul style={{ listStyle: "none", padding: "10px", margin: "0" }}>
                <li style={{ padding: "8px 0", cursor: "pointer" }}>
                  👤 Profile
                </li>
                <li style={{ padding: "8px 0", cursor: "pointer" }}>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={FRONTEND_URL}
                  >
                    🏠 Home
                  </Link>
                </li>
                <li style={{ padding: "8px 0", cursor: "pointer" }}>
                  ⚙️ Settings
                </li>
                <li style={{ padding: "8px 0", cursor: "pointer" }}>💬 Help</li>
                <hr style={{ height: "0px" }} />
                <li
                  style={{
                    padding: "8px 30%",
                    color: "red",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
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
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
