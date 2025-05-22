import React, { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import UserLoginForm from './components/UserLoginForm';
import AdminLoginForm from './components/AdminLoginForm';
import Dashboard from './components/Dashboard';
import truck  from "./images/truck.svg"

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Dashboard userName={userName} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Background Image */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <img
          src={truck}
          alt="Logistics Truck"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500">Skeiron Logistics</h1>
            <p className="text-gray-500 mt-2">Smart logistics solutions for your business</p>
          </div>

          <ToggleSwitch isAdmin={isAdmin} onToggle={() => setIsAdmin(!isAdmin)} />

          {isAdmin ? (
            <AdminLoginForm onSuccess={() => handleLogin('Admin')} />
          ) : (
            <UserLoginForm onSuccess={(email) => handleLogin(email.split('@')[0])} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;