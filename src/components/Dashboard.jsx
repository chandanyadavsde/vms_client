import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-xl text-gray-600">
          Hi, <span className="font-semibold text-orange-500">{userName}</span>!
        </p>
        <p className="text-gray-500 mt-4">Welcome to Skeiron Logistics Dashboard</p>
        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
