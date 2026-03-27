import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-sm px-6 py-3 flex justify-between items-center relative">

      {/* Logo */}
      <h1
        onClick={() => navigate("/signup")}
        className="text-xl font-bold text-blue-600 cursor-pointer"
      >
        Swapify
      </h1>

      {/* Middle Menu */}
      <div className="flex items-center gap-6">

        <div className="cursor-pointer hover:text-blue-600">
          Updates ⌄
        </div>

        {/* Technologies Dropdown */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="hover:text-blue-600">
            Technologies ⌄
          </span>

          {showDropdown && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-[300px] p-4 z-50">

              {/* Technologies by Domain */}
              <div>
                <p
                  onClick={() => navigate("/TechnologyByDomain")}
                  className="py-1 hover:text-blue-600 cursor-pointer"
                >
                  Technology By Domain
                </p>
              </div>

              {/* Programming → NAVIGATE */}
              <div>
                <p
                  onClick={() => navigate("/programming")}
                  className="py-1 hover:text-blue-600 cursor-pointer"
                >
                  Programming Languages
                </p>
              </div>

              {/* Frameworks */}
              <div>
                <p
                  onClick={() => navigate("/FrameWork")}
                  className="py-1 hover:text-blue-600 cursor-pointer"
                >
                  FrameWork
                </p>
              </div>

              {/* ML */}
              <div>
                <p
                  onClick={() => navigate("/ML")}
                  className="py-1 hover:text-blue-600 cursor-pointer"
                >
                  Machine Learning and Data Science
                </p>
              </div>

              {/* Cybersecurity */}
              <div>
                <p
                  onClick={() => navigate("/Cybersecurity")}
                  className="py-1 hover:text-blue-600 cursor-pointer"
                >
                  Cybersecurity
                </p>
              </div>

              {/* Database */}
              <div>
                <p
                  onClick={() => navigate("/Database")}
                  className="py-1 hover:text-blue-600 cursor-pointer"
                >
                  Database Languages
                </p>
              </div>

            </div>
          )}
        </div>

        <div className="cursor-pointer hover:text-blue-600">
          Help
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {!isLoggedIn && (
          <>
            <button
              onClick={() => navigate("/login")}
              className="border px-4 py-1 rounded text-blue-600 hover:bg-blue-50"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;