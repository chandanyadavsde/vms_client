import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-12 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <button 
          type="button" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faSearch} className="text-sm" />
        </button>
      </div>
      <DarkModeToggle />
    </header>
  );
}