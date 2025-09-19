import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // ProtectedRoute me check hone wala
    localStorage.removeItem("adminToken"); // agar token save kiya hai
    localStorage.removeItem("adminUser");  // agar user info save kiya hai
    navigate("/admin/login");               // login page pe redirect
  };

  // 🔹 Menu items
  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/users", label: "Users" },
    { path: "/admin/reports", label: "Reports" },
    { path: "/admin/ourteam", label: "Our Team" },
    { path: "/admin/lectures", label: "Lectures" }, // ✅ New Option Added
  ];

  return (
    <div className="sidebar bg-dark text-light vh-100 p-3">
      <h3 className="sidebar-title text-warning mb-4">Admin Panel</h3>
      <ul className="sidebar-menu list-unstyled">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`mb-2 p-2 rounded ${
              location.pathname === item.path ? "bg-warning text-dark" : ""
            }`}
          >
            <Link
              to={item.path}
              className={`text-decoration-none ${
                location.pathname === item.path ? "text-dark" : "text-light"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* 🔹 Logout Button */}
        <li className="mt-4">
          <button
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
