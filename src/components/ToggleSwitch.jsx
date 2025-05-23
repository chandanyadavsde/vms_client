import React from "react";

const ToggleSwitch = ({ isAdmin, onToggle }) => (
  <div className="flex justify-center mb-8">
    <div className="relative bg-gray-200 rounded-full p-1 w-64 flex">
      <button
        onClick={onToggle}
        className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
          !isAdmin ? "bg-orange-500 text-white" : "text-gray-700"
        }`}
      >
        User
      </button>
      <button
        onClick={onToggle}
        className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
          isAdmin ? "bg-orange-500 text-white" : "text-gray-700"
        }`}
      >
        Admin
      </button>
    </div>
  </div>
);

export default ToggleSwitch;
