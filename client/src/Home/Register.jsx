import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Import eye icons from lucide-react

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Here, you would typically make an API call to your backend 
      // to register the new user. 
      // This is a simplified example:

      // Simulate successful registration (replace with actual API call)
      // ... (Logic to register the user) ...

      navigate('/login'); // Redirect to the login page after successful registration
    } catch (err) {
      setError('An error occurred during registration.');
      console.error(err);
    }
  };

  return (
    <div
      className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full"
      style={{
        boxShadow: '0 4px 6px rgba(253, 216, 53, 1)',
        backgroundImage: 'url("/background.jpg")', // Reference the image from the public folder if needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-1 focus:border-yellow-500"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-1 focus:border-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-1 focus:border-yellow-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1 text-gray-600 bg-transparent border-none focus:outline-none"
              style={{ outline: 'none' }}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-1 focus:border-yellow-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1 text-gray-600 bg-transparent border-none focus:outline-none"
              style={{ outline: 'none' }}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Register
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Already have an account?{' '}
        <Link to="/Log" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
