import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-blue-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Welcome Back</h2>
          <p className="text-blue-500 mt-2">Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-200 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-blue-700">
              <input type="checkbox" className="mr-2 rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <a href="#" className="font-medium text-blue-600 hover:text-blue-800 transition">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-200 transition duration-200 transform active:scale-95"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-blue-600">
          Don't have an account?{' '}
          <a href="#" className="font-bold text-blue-700 hover:underline">
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
