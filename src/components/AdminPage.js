// src/components/AdminPage.js
import React, { useState } from 'react';
import ReactGA from 'react-ga';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'idosegev' && password === '311215') {
      setIsLoggedIn(true);
      // יוזמת את Google Analytics עם מזהה המעקב שלך
      ReactGA.initialize('YOUR-GA-ID'); // החלף במזהה ה-GA שלך
      ReactGA.pageview(window.location.pathname + window.location.search);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {isLoggedIn ? (
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
          <p>Analytics and detailed information will be displayed here.</p>
          {/* כאן תוכל להוסיף דשבורד אנליטיקס אמיתי */}
        </div>
      ) : (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminPage;
