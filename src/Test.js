// import React, { useState } from "react";
// import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// const App = () => (
  
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />
//         <Routes>
//           <Route path="/" element={<UserManagementPage />} />
//           <Route path="/add-user" element={<AddUserPage />} />
//         </Routes>
//       </div>
//     </div>
  
// );

// const Sidebar = () => (
//   <div className="w-64 bg-[#1a2234] text-white flex flex-col">
//     <div className="p-5 border-b border-gray-700">
//       <div className="text-xl font-bold text-amber-500">
//         <span className="text-2xl">skerron</span>
//         <span className="text-sm ml-1 text-white">LOGISTICS</span>
//       </div>
//     </div>
//     <nav className="flex-1 overflow-y-auto py-4">
//       <ul>
//         <li className="px-5 py-3">
//           <Link to="/" className="flex items-center text-gray-300 hover:text-white">
//             <i className="fas fa-users mr-3"></i>
//             User Management
//           </Link>
//         </li>
//         <li className="px-5 py-3">
//           <Link to="/add-user" className="flex items-center text-gray-300 hover:text-white">
//             <i className="fas fa-user-plus mr-3"></i>
//             Add User
//           </Link>
//         </li>
//       </ul>
//     </nav>
//     <div className="p-4 border-t border-gray-700">
//       <div className="flex items-center">
//         <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
//           <img
//             src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20man%20with%20short%20dark%20hair%20wearing%20business%20attire%20against%20a%20neutral%20background&width=40&height=40"
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="ml-3">
//           <p className="text-sm font-medium">Ranjith Desai</p>
//           <p className="text-xs text-gray-400">r.desai@example.co</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Header = () => (
//   <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
//     <div className="relative w-64">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//       />
//       <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//     </div>
//     <DarkModeToggle />
//   </header>
// );

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <div className="flex items-center">
//       <div className="mr-2 text-sm font-medium">Dark Mode</div>
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           className="sr-only peer"
//           checked={darkMode}
//           onChange={() => setDarkMode(!darkMode)}
//         />
//         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//       </label>
//     </div>
//   );
// };

// const users = [...Array(9)].map((_, i) => ({
//   id: i + 1,
//   name: "Chandan Vishwakarma",
//   email: "chandan.vishwakarma@example.co",
//   role: ["Admin", "Coordinator", "Manager", "Other"][i % 4],
//   status: i % 3 === 2 ? "Inactive" : "Active",
// }));

// const getRoleBadgeClass = (role) => {
//   switch (role) {
//     case "Admin": return "bg-amber-100 text-amber-600";
//     case "Coordinator": return "bg-blue-100 text-blue-600";
//     case "Manager": return "bg-pink-200 text-pink-600";
//     case "Other": return "bg-purple-100 text-purple-600";
//     default: return "bg-gray-100 text-gray-600";
//   }
// };

// const getStatusClass = (status) => status === "Active" ? "text-green-600" : "text-red-500";

// const UserManagementPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("Latest");
//   const [showSortOptions, setShowSortOptions] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const filtered = users.filter(u =>
//     u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     u.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main className="flex-1 overflow-y-auto p-6 bg-white">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">User Management</h1>
//         <Link
//           to="/add-user"
//           className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center whitespace-nowrap"
//         >
//           <i className="fas fa-plus mr-2"></i>Add User
//         </Link>
//       </div>
//       {/* ...stats and table code unchanged... */}
//       {/* For brevity, include stats cards, search/filter bar, table, pagination here */}
//     </main>
//   );
// };

// const AddUserPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ firstName: "", middleName: "", lastName: "", role: "Manager", phone: "", email: "", location: "Pune" });
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = () => {
//     setShowConfirmation(true);
//     setTimeout(() => {
//       setShowConfirmation(false);
//       navigate("/");
//       // submit logic here
//     }, 2000);
//   };

//   return (
//     <main className="flex-1 overflow-y-auto p-6 bg-white">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">Add User</h1>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center whitespace-nowrap"
//         >
//           <i className="fas fa-arrow-left mr-2"></i>Back
//         </button>
//       </div>
//       {/* form fields same as before... */}
//       <div className="flex justify-end gap-4 mt-8">
//         <button onClick={() => navigate("/")} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
//           Cancel
//         </button>
//         <button onClick={handleSubmit} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
//           Create User
//         </button>
//       </div>

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 text-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <i className="fas fa-check text-2xl text-green-500"></i>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Success!</h3>
//             <p className="text-gray-600 mb-4">New user has been added successfully</p>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default App;
