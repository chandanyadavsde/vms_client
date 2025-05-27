import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faChevronDown,
  faChevronUp,
  faUser,
  faEnvelope,
  faUserShield,
  faToggleOn,
  faPlus,
  faUsers,
  faUserCheck,
  faUserTimes,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { users, getRoleBadgeClass, getStatusClass } from "./user";

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const columns = [
    { label: "Name", icon: faUser, key: "name" },
    { label: "Email", icon: faEnvelope, key: "email" },
    { label: "Role", icon: faUserShield, key: "role" },
    { label: "Status", icon: faToggleOn, key: "status" },
    { label: "Actions", icon: faCogs, key: "actions" },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <Link
          to="/admindashboard/add-user"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add User
        </Link>
      </div>

      {/* Cards vertically stacked */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border rounded-lg p-4 shadow flex items-center">
          <FontAwesomeIcon icon={faUsers} className="text-xl text-orange-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Total Users</p>
            <h2 className="text-2xl font-bold">120</h2>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow flex items-center">
          <FontAwesomeIcon icon={faUserCheck} className="text-xl text-green-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Active Users</p>
            <h2 className="text-2xl font-bold">31</h2>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow flex items-center">
          <FontAwesomeIcon icon={faUserTimes} className="text-xl text-red-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Inactive Users</p>
            <h2 className="text-2xl font-bold">3</h2>
          </div>
        </div>
      </div>

      {/* Search & Sort */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or role"
          className="w-1/3 border border-gray-300 rounded px-4 py-2 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setShowSortOptions(!showSortOptions)}
          className="flex items-center border border-gray-300 rounded px-4 py-2 text-sm"
        >
          Sort By: {sortBy}
          <FontAwesomeIcon
            icon={showSortOptions ? faChevronUp : faChevronDown}
            className="ml-2 text-xs"
          />
        </button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-left text-sm text-gray-600">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="py-2 px-4">
                  <FontAwesomeIcon icon={col.icon} className="mr-2" />
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4 text-sm">{user.name}</td>
                <td className="py-3 px-4 text-sm">{user.email}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleBadgeClass(user.role)}`}> {user.role} </span>
                </td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusClass(user.status)}`}> {user.status} </span>
                </td>
                <td className="py-3 px-4 text-sm flex gap-2">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 rounded border text-sm bg-gray-100 hover:bg-gray-200"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded text-sm ${ currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-100 hover:bg-gray-200" }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 rounded border text-sm bg-gray-100 hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default UserManagementPage;
