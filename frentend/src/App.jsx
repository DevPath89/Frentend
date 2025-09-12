import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Landing Page Components
import Navbar from "./Components/LandingPage/Navbar";   
import Home from "./Components/LandingPage/Home";
import AboutUs from "./Components/LandingPage/AboutUs";
import Login from "./Components/LandingPage/Login";
import Registration from "./Components/LandingPage/Registration";
import OurTeam from "./Components/LandingPage/OurTeam";
import Services from "./Components/LandingPage/Services";
import SummerTraining from "./Components/LandingPage/SummerTraining";
import WinterTraining from "./Components/LandingPage/WinterTraining";
import Footer from "./Components/LandingPage/Footer";

// Admin Components
import AdminLogin from "./Components/Admin/Adminlogin";
import Dashboard from "./Components/Admin/Dashboard";
import Users from "./Components/Admin/Users";
import Reports from "./Components/Admin/Reports";
import OurTeamManager from "./Components/Admin/OurTeamManager"; // ✅ Correct import
import ProtectedRoute from "./Components/Admin/ProtectedRoute";

import "./App.css";

function AppWrapper() {
  const location = useLocation();
  const isLandingPage = !location.pathname.startsWith("/admin"); 
  const isAdminLoginPage = location.pathname === "/admin/login";

  return (
    <>
      {isLandingPage && <Navbar />}

      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/summer" element={<SummerTraining />} />
        <Route path="/winter" element={<WinterTraining />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Pages */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        {/* ✅ Our Team Management Route */}
        <Route
          path="/admin/ourteam"
          element={
            <ProtectedRoute>
              <OurTeamManager />
            </ProtectedRoute>
          }
        />
      </Routes>

      {isLandingPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
