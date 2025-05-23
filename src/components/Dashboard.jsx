import React from "react";

const Dashboard = ({ userName, onLogout }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-xl text-gray-600">
            Hi, <span className="font-semibold text-orange-500">{userName}</span>!
          </p>
          <p className="text-gray-500 mt-4">Welcome to Skeiron Logistics Dashboard</p>
        </div>
        <div className="mt-8">
          <button
            onClick={onLogout}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] !rounded-button whitespace-nowrap cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
