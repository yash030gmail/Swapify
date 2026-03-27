import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

// Components
import Navbar from "./components/Navbar";

// Pages
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Programming from "./pages/Programming";
import Domain from "./pages/TechnologyByDomain";
import Database from "./pages/Database";
import Framework from "./pages/Framework";
import ML from "./pages/ML";
import Cybersecurity from "./pages/Cybersecurity";
import Enroll from "./pages/Enroll";
import TutorDashboard from "./pages/TutorDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // ✅ Get role from localStorage
  const role = localStorage.getItem("role");

  // ✅ Hide Navbar on auth pages
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {/* ✅ Navbar only when logged in */}
      {!hideNavbar && isLoggedIn && <Navbar />}

      <Routes>

        {/* 🔐 Auth Routes */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* 🏠 Home (Trainee Only) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              role === "tutor" ? (
                <Navigate to="/tutor-dashboard" />
              ) : (
                <Programming />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* 🎓 Tutor Dashboard (Protected) */}
        <Route
          path="/tutor-dashboard"
          element={
            isLoggedIn ? (
              role === "tutor" ? (
                <TutorDashboard />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* 📚 Course Pages (Only if logged in) */}
        <Route
          path="/programming"
          element={isLoggedIn ? <Programming /> : <Navigate to="/login" />}
        />

        <Route
          path="/TechnologyByDomain"
          element={isLoggedIn ? <Domain /> : <Navigate to="/login" />}
        />

        <Route
          path="/Database"
          element={isLoggedIn ? <Database /> : <Navigate to="/login" />}
        />

        <Route
          path="/Framework"
          element={isLoggedIn ? <Framework /> : <Navigate to="/login" />}
        />

        <Route
          path="/ML"
          element={isLoggedIn ? <ML /> : <Navigate to="/login" />}
        />

        <Route
          path="/Cybersecurity"
          element={
            isLoggedIn ? <Cybersecurity /> : <Navigate to="/login" />
          }
        />

        {/* 📝 Enroll */}
        <Route
          path="/enroll"
          element={isLoggedIn ? <Enroll /> : <Navigate to="/login" />}
        />

      </Routes>
    </>
  );
}

export default App;