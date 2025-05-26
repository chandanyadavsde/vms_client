import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1a2234] text-white flex flex-col">
      <div className="p-5 border-b border-gray-700">
        <div className="text-xl font-bold text-amber-500">
          <span className="text-2xl">skerron</span>
          <span className="text-sm ml-1 text-white">LOGISTICS</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul>
          <li className="px-5 py-3">
            <Link to="/" className="flex items-center text-gray-300 hover:text-white">
              <i className="fas fa-users mr-3"></i>
              User Management
            </Link>
          </li>
          <li className="px-5 py-3">
            <Link to="/add-user" className="flex items-center text-gray-300 hover:text-white">
              <i className="fas fa-user-plus mr-3"></i>
              Add User
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20man%20with%20short%20dark%20hair%20wearing%20business%20attire%20against%20a%20neutral%20background&width=40&height=40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Ranjith Desai</p>
            <p className="text-xs text-gray-400">r.desai@example.co</p>
          </div>
        </div>
      </div>
    </div>
  );
}
