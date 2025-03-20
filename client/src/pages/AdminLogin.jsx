import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../Home';
import Footer from '../Layout/Footer';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you'd typically have more robust checks)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    try {
      // Here, you would typically make an API call to your backend 
      // to authenticate the user. 
      // This is a simplified example:

      // Simulate successful login (replace with actual API call)
      if (email === 'user@example.com' && password === 'password123') {
        // Navigate to the protected area after successful login
        navigate('/dashboard'); // Replace '/dashboard' with the actual protected route
      } else {
        setError('Invalid email or password.');
      }

    } catch (err) {
      setError('An error occurred during login.');
      console.error(err);
    }
  };

  return (
    <div>
        <Header/>
        <div  className='relative bg-cover bg-center py-10 px-6 flex justify-center item-center bg-gray-100'>
    <div
      className="bg-white py-16 px-8 rounded-lg shadow-lg max-w-md w-full"
      style={{ boxShadow: '0 4px 6px rgba(253, 216, 53, 1)'
       }}
      
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-1 focus:border-yellow-500"
          />
        </div>
        <div className="text-right mb-4">
          <button
            type="button"
            onClick={() => console.log("Forgot Password Clicked")}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Forgot Password?
          </button>
        </div>
       
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
  
       >
          Login
        </button>
        
       
      </form>
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-2 text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{' '}
        <Link to="/admin" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
      <p className="text-center text-gray-600 mt-6">
              <Link to="/dashboard" className="text-blue-500 hover:underline">
                Dashboard
              </Link>
            </p>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AdminLogin;
