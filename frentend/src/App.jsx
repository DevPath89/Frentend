import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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
import Lectures from "./Components/LandingPage/Lectures"; // user-side lectures page
import Footer from "./Components/LandingPage/Footer";

// Loader Component (LandingPage folder)
import DevpathLoader from "./Components/LandingPage/DevpathLoader";

// Admin Components
import AdminLogin from "./Components/Admin/Adminlogin";
import Dashboard from "./Components/Admin/Dashboard";
import Users from "./Components/Admin/Users";
import Reports from "./Components/Admin/Reports";
import OurTeamManager from "./Components/Admin/OurTeamManager";
import LecturesManager from "./Components/Admin/LecturesManager"; // admin lectures
import ProtectedRoute from "./Components/Admin/ProtectedRoute";

import "./App.css";

function AppWrapper() {
  const location = useLocation();
  const isLandingPage = !location.pathname.startsWith("/admin");

  // Track login state for user-side lectures page
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Loader state
  const [loading, setLoading] = useState(true); // initially true

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }

    // Simulate loading (replace with actual API call if needed)
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  // Agar loading true hai, sirf loader dikhaye, content render na ho
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <DevpathLoader size={140} company="Devpath" subtitle="loading..." />
      </div>
    );
  }

  return (
    <>
      {/* Navbar केवल Landing Pages पर */}
      {isLandingPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout} />}

      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/summer" element={<SummerTraining />} />
        <Route path="/winter" element={<WinterTraining />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/login" element={<Login onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Registration />} />

        {/* User-side Lectures page (login required) */}
        {isLoggedIn && <Route path="/lectures" element={<Lectures />} />}

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Protected Pages */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/admin/ourteam" element={<ProtectedRoute><OurTeamManager /></ProtectedRoute>} />
        <Route path="/admin/lectures" element={<ProtectedRoute><LecturesManager /></ProtectedRoute>} />
      </Routes>

      {/* Footer केवल Landing Pages पर */}
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
