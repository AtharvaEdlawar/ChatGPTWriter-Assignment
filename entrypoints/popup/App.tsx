import React, { useState } from 'react';
import '../tailwind.css';

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup or login logic here
    if (isSignup) {
      console.log('Signing up with:', name, email, password);
    } else {
      console.log('Logging in with:', email, password);
    }
  };

  const handleSignupClick = () => {
    if (isSignup) {
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
    }
    setIsSignup(!isSignup);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-navy-900 text-white">
        <div className="rounded-lg p-8 w-full max-w-md">
          <img src="icon/96.png" alt="Company Logo" className="h-12 mt-4" />
          <h1 className="text-2xl font-bold mb-6">Welcome to linkedLingo</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignup && (
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-navy-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-navy-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-800 rounded-md py-2 px-4 hover:bg-blue-950 transition-colors"
              >
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
              <span
                className="text-blue-500 hover:text-blue-400 cursor-pointer"
                onClick={handleSignupClick}
              >
                {isSignup ? 'Back to Login' : "Don't have an account? Sign up"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;