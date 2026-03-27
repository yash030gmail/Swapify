import { useNavigate, Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);

    const role = localStorage.getItem("role");

    if (role === "tutor") {
      navigate("/tutor-dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded shadow-md w-100">

        <h1 className="text-xl font-bold text-blue-600">Swapify</h1>

        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-600 mb-4">
          Sign in to continue your journey
        </p>

        <h1 className="text-center font-bold mb-4">Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            required
            placeholder="Email"
            className="p-2 border w-full mb-3"
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="p-2 border w-full mb-3"
          />

          <button className="bg-blue-600 text-white py-2 w-full rounded">
            Login
          </button>

          {/* Options */}
          <div className="flex justify-between text-sm mt-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <span className="text-blue-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>
        </form>

        {/* ✅ Footer Added */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;