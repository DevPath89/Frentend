import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaUsers,
  FaSignInAlt,
  FaUserPlus,
  FaBookOpen,
  FaChalkboardTeacher,
  FaSignOutAlt
} from "react-icons/fa";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navConfig = {
    logo: { src: "/images/Dev.png", alt: "DevPath Logo" },
    items: [
      { name: "Home", href: "/", type: "link", icon: <FaHome /> },
      { name: "About Us", href: "/about", type: "link", icon: <FaInfoCircle /> },
      { name: "Services", href: "/services", type: "link", icon: <FaServicestack /> },
      { name: "Our Team", href: "/ourteam", type: "link", icon: <FaUsers /> },

      ...(isLoggedIn
        ? [
            { name: "Lectures", href: "/lectures", type: "link", icon: <FaChalkboardTeacher /> },
            { name: "Logout", href: "#", type: "link", icon: <FaSignOutAlt />, action: handleLogout }
          ]
        : [
            { name: "Login", href: "/login", type: "link", icon: <FaSignInAlt /> },
            { name: "Registration", href: "/register", type: "link", icon: <FaUserPlus /> }
          ]),

      {
        name: "Training",
        type: "dropdown",
        icon: <FaBookOpen />,
        children: [
          { name: "Summer Training", href: "/summer", icon: <FaBookOpen /> },
          { name: "Winter Training", href: "/winter", icon: <FaBookOpen /> },
        ],
      },
    ],
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={navConfig.logo.src} alt={navConfig.logo.alt} className="navbar-logo" />
        </Link>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navConfig.items.map((item, index) =>
              item.type === "link" ? (
                <li key={index} className="nav-item">
                  {item.action ? (
                    <span
                      className="nav-link navbar-link d-flex align-items-center"
                      onClick={item.action}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="me-1">{item.icon}</span> {item.name}
                    </span>
                  ) : (
                    <Link className="nav-link navbar-link d-flex align-items-center" to={item.href}>
                      <span className="me-1">{item.icon}</span> {item.name}
                    </Link>
                  )}
                </li>
              ) : (
                <li key={index} className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle navbar-link d-flex align-items-center"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-1">{item.icon}</span> {item.name}
                  </a>
                  <ul className="dropdown-menu">
                    {item.children.map((child, i) => (
                      <li key={i}>
                        <Link
                          className="dropdown-item navbar-link d-flex align-items-center"
                          to={child.href}
                        >
                          <span className="me-1">{child.icon || item.icon}</span> {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
