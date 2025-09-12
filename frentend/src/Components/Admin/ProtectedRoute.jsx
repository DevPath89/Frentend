import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Check if admin is logged in
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    // Not logged in → redirect to admin login
    return <Navigate to="/admin/login" />;
  }

  // Logged in → allow access
  return children;
}

export default ProtectedRoute;
