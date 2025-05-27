
import {React,useState} from "react";
import { Link } from "react-router-dom";

const users = [...Array(9)].map((_, i) => ({
  id: i + 1,
  name: "Chandan Vishwakarma",
  email: "chandan.vishwakarma@example.co",
  role: ["Admin", "Coordinator", "Manager", "Other"][i % 4],
  status: i % 3 === 2 ? "Inactive" : "Active",
}));

const getRoleBadgeClass = (role) => {
  switch (role) {
    case "Admin": return "bg-amber-100 text-amber-600";
    case "Coordinator": return "bg-blue-100 text-blue-600";
    case "Manager": return "bg-pink-200 text-pink-600";
    case "Other": return "bg-purple-100 text-purple-600";
    default: return "bg-gray-100 text-gray-600";
  }
};

const getStatusClass = (status) => status === "Active" ? "text-green-600" : "text-red-500";

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <Link
          to="/admindashboard/add-user"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center whitespace-nowrap"
        >
          <i className="fas fa-plus mr-2"></i>Add User
        </Link>
      </div>
      {/* ...stats and table code unchanged... */}
      {/* For brevity, include stats cards, search/filter bar, table, pagination here */}
    </main>
  );
};

export default UserManagementPage;