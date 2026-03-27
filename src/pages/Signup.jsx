import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setIsLoggedIn }) {
  const [role, setRole] = useState("trainee");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected role:", role); // DEBUG

    setIsLoggedIn(true);

    // ✅ Save role
    localStorage.setItem("role", role);

    // ✅ Redirect
    if (role === "tutor") {
      navigate("/tutor-dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Swapify</h1>

      <div className="bg-white w-96 p-6 rounded-xl shadow-md">

        <h1 className="text-xl font-bold mb-2">
          Sign-up and apply for free
        </h1>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

          {/* Role */}
          <div className="flex justify-center gap-6 mb-3">
            <label>
              <input
                type="radio"
                value="trainee"
                checked={role === "trainee"}
                onChange={(e) => setRole(e.target.value)}
              /> Trainee
            </label>

            <label>
              <input
                type="radio"
                value="tutor"
                checked={role === "tutor"}
                onChange={(e) => setRole(e.target.value)}
              /> Tutor
            </label>
          </div>

          <input type="email" required placeholder="Email" className="p-2 border rounded" />
          <input type="password" required placeholder="Password" className="p-2 border rounded" />
          <input type="password" required placeholder="Confirm Password" className="p-2 border rounded" />

          <button className="bg-blue-600 text-white py-2 rounded">
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}

export default SignUp;