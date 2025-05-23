import React from "react";

const ToggleSwitch = ({ isAdmin, onToggle }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative bg-gray-200 rounded-full p-1 w-64 flex">
        <button
          id="userToggle"
          onClick={onToggle}
          className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 !rounded-button whitespace-nowrap cursor-pointer ${
            !isAdmin ? "bg-orange-500 text-white" : "text-gray-700"
          }`}
        >
          User
        </button>
        <button
          id="adminToggle"
          onClick={onToggle}
          className={`w-1/2 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 !rounded-button whitespace-nowrap cursor-pointer ${
            isAdmin ? "bg-orange-500 text-white" : "text-gray-700"
          }`}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
