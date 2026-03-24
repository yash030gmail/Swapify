import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Swapify</h1>
        <Link to="/login">
          <button className="border px-4 py-1 rounded-md text-blue-600 hover:bg-blue-50">
            Login
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex justify-center mt-10">
        <div className="bg-white w-96 p-6 rounded-xl shadow-md">

          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Sign-up and apply for free
          </h1>

          <p className="text-gray-600 mb-4">
            Skill exchange platform for trainees & tutors
          </p>

          <h2 className="text-center font-semibold mb-4">
            Candidate Sign Up
          </h2>

          {/* Email Form */}
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

              {/* Role Selection */}
            <div className="flex justify-center gap-6 mb-3 text-sm">
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="trainee"
                  defaultChecked
                  className="accent-blue-600"
                />
                Trainee
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="tutor"
                  className="accent-blue-600"
                />
                Tutor
              </label>

            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign up with Email
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            
            <button
              onClick={() => alert("Google login coming soon")}
              className="flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button
              onClick={() => alert("LinkedIn login coming soon")}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
            >
              <FaLinkedin size={20} />
              Continue with LinkedIn
            </button>

            <button
              onClick={() => alert("Facebook login coming soon")}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              <FaFacebook size={20} />
              Continue with Facebook
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to our Terms & Conditions
          </p>

          <p className="text-sm text-center mt-2">
            Already registered?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignUp;