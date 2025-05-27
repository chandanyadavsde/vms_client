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





// privious login code 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import ToggleSwitch from "../components/ToggleSwitch";
// import UserLoginForm from "../components/UserLoginForm";
// import AdminLoginForm from "../components/AdminLoginForm";
// import truck from "../images/truck.svg";
// import warehouse from "../images/warehouse.jpg";

// const LoginPage = () => {
//   const [isAdmin, setIsAdmin]     = useState(false);
//   const [email, setEmail]         = useState("");
//   const [password, setPassword]   = useState("");
//   const [otp, setOtp]             = useState("");
//   const [showOtp, setShowOtp]     = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError]         = useState("");
//   const navigate                  = useNavigate();

//   const resetForm = () => {
//     setShowOtp(false);
//     setEmail("");
//     setPassword("");
//     setOtp("");
//     setError("");
//   };

//   const handleToggle = () => {
//     setIsAdmin(!isAdmin);
//     resetForm();
//   };

//   const finishLogin = (name) => {
//     localStorage.setItem("loggedIn", "true");
//     localStorage.setItem("userName", name);
//     navigate("/AdminDashboard");
//   };

//   const handleGetOtp = async (e) => {
//     e.preventDefault();
//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       return setError("Please enter a valid email address");
//     }
//     setIsLoading(true);
//     try {
//       const response = await fetch("https://5e60-27-107-57-214.ngrok-free.app/vms/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ identifier: email }),
//       });
//       const result = await response.json();
//       if (!result.success) {
//         setError(result.message);
//       } else {
//         setShowOtp(true);
//         setError("");
//       }
//     } catch (err) {
//       setError("Failed to connect to server");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUserLogin = async (e) => {
//     e.preventDefault();
//     if (!otp.match(/^\d{6}$/)) {
//       return setError("Please enter a valid 6-digit OTP");
//     }
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:3000/vms/otpverify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ identifier: email, otp }),
//       });
//       const result = await response.json();
//       if (!result.success) {
//         setError(result.message);
//       } else {
//         localStorage.setItem("token", result.token);
//         finishLogin(result.user.name);
//       }
//     } catch (err) {
//       setError("Server error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ UPDATED: Admin login handler (API call + validation)
//   const handleAdminLogin = async (e) => {
//     e.preventDefault();

//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       return setError("Please enter a valid email address");
//     }

//     if (password.length < 6) {
//       return setError("Password must be at least 6 characters");
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:3000/vms/admin/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();

//       if (!result.success) {
//         setError(result.message || "Login failed");
//       } else {
//         localStorage.setItem("token", result.token);
//         finishLogin(result.user.name);
//       }
//     } catch (err) {
//       setError("Unable to connect. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     setError("");
//   }, [isAdmin, email, password, otp]);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row p-2">
//       <div className="hidden md:block md:w-1/2 relative overflow-hidden rounded-xl">
//         <img
//           src={truck}
//           alt="Logistics Truck"
//           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
//             !isAdmin ? "translate-x-0" : "translate-x-full"
//           }`}
//         />
//         <img
//           src={warehouse}
//           alt="Warehouse"
//           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
//             isAdmin ? "translate-x-0" : "-translate-x-full"
//           }`}
//         />
//       </div>

//       <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-orange-500">Skeiron Logistics</h1>
//             <p className="text-gray-500 mt-2">Smart logistics solutions for your business</p>
//           </div>

//           {/* You can re-enable ToggleSwitch if needed */}
//           {/* <ToggleSwitch isAdmin={isAdmin} onToggle={handleToggle} /> */}

//           <div className="form-content transition-all duration-300">
//             {/* {isAdmin ? ( */}
//               <AdminLoginForm
//                 email={email}
//                 setEmail={setEmail}
//                 password={password}
//                 setPassword={setPassword}
//                 isLoading={isLoading}
//                 error={error}
//                 onLogin={handleAdminLogin}
//               />
//             {/* ) : ( */}
//               {/* <UserLoginForm
//                 email={email}
//                 setEmail={setEmail}
//                 otp={otp}
//                 setOtp={setOtp}
//                 showOtp={showOtp}
//                 isLoading={isLoading}
//                 error={error}
//                 onGetOtp={handleGetOtp}
//                 onVerifyOtp={handleUserLogin}
//               />
//             )} */}

//             <div className="mt-6 text-center">
//               <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// auto login page 




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import truck from "../images/truck.svg";
// import warehouse from "../images/warehouse.jpg";

// const ADMIN_EMAIL = "admin@skeiron.com";
// const base_url = process.env.REACT_APP_VMS_API_URL

// const LoginPage = () => {
//   const [isAdmin, setIsAdmin]     = useState(false);
//   const [email, setEmail]         = useState("");
//   const [password, setPassword]   = useState("");
//   const [otp, setOtp]             = useState("");
//   const [showOtp, setShowOtp]     = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError]         = useState("");
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const navigate                  = useNavigate();

//   // Reset form fields when switching modes
//   const resetForm = () => {
//     setShowOtp(false);
//     setPassword("");
//     setOtp("");
//     setError("");
//   };

//   // Detect admin vs. user by email
//   useEffect(() => {
//     if (email.toLowerCase() === ADMIN_EMAIL) {
//       if (!isAdmin) {
//         setIsTransitioning(true);
//         setTimeout(() => {
//           setIsAdmin(true);
//           resetForm();
//           setIsTransitioning(false);
//         }, 300);
//       }
//     } else {
//       if (isAdmin) {
//         setIsTransitioning(true);
//         setTimeout(() => {
//           setIsAdmin(false);
//           resetForm();
//           setIsTransitioning(false);
//         }, 300);
//       }
//     }
//   }, [email]);

//   const finishLogin = (name) => {
//     localStorage.setItem("loggedIn", "true");
//     localStorage.setItem("userName", name);
//     navigate("/admindashboard");
//   };

//   const handleGetOtp = async (e) => {
//     e.preventDefault();
//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       return setError("Please enter a valid email address");
//     }
//     setIsLoading(true);
//     try {
//       const res = await fetch(`${base_url}/vms/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ identifier: email }),
//       });
//       const result = await res.json();
//       if (!result.success) setError(result.message);
//       else {
//         setShowOtp(true);
//       }
//     } catch {
//       setError("Failed to connect to server");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUserLogin = async (e) => {
//     e.preventDefault();
//     if (!otp.match(/^\d{6}$/)) {
//       return setError("Please enter a valid 6-digit OTP");
//     }
//     setIsLoading(true);
//     try {
//       const res = await fetch(`${base_url}/vms/otpverify`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ identifier: email, otp }),
//       });
//       const result = await res.json();
//       if (!result.success) setError(result.message);
//       else {
//         localStorage.setItem("token", result.token);
//         finishLogin(result.user.name);
//       }
//     } catch {
//       setError("Server error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAdminLogin = async (e) => {
//     e.preventDefault();
//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       return setError("Please enter a valid email address");
//     }
//     if (password.length < 6) {
//       return setError("Password must be at least 6 characters");
//     }
//     setIsLoading(true);
//     try {
//       const res = await fetch(`${base_url}/vms/admin/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const result = await res.json();
//       if (!result.success) setError(result.message || "Login failed");
//       else {
//         localStorage.setItem("token", result.token);
//         finishLogin(result.user.name);
//       }
//     } catch {
//       setError("Unable to connect. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     setError("");
//   }, [password, otp]);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row p-2">
//       {/* Left images */}
//       <div className="hidden md:block md:w-1/2 relative overflow-hidden rounded-xl">
//         <img
//           src={truck}
//           alt="Logistics Truck"
//           className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
//             !isAdmin ? "opacity-100" : "opacity-0"
//           }`}
//         />
//         <img
//           src={warehouse}
//           alt="Warehouse"
//           className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
//             isAdmin ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       </div>

//       {/* Form container */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-orange-500">Skeiron Logistics</h1>
//             <p className="text-gray-500 mt-2">Smart logistics solutions for your business</p>
//           </div>

//           <form
//             onSubmit={isAdmin ? handleAdminLogin : showOtp ? handleUserLogin : handleGetOtp}
//             className="space-y-4"
//           >
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <div className="relative">
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm"
//                   disabled={isLoading || isTransitioning}
//                 />
//                 <i className="fas fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//               </div>
//             </div>

//             {/* Password for admin */}
//           {/* Password for admin */}
//             <div className={`transition-all duration-500 ease-in-out transform ${isAdmin ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} origin-top`}>
//               <div className="mt-4">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     type="password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm"
//                     disabled={isLoading}
//                   />
//                   <i className="fas fa-lock absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                 </div>
//               </div>
//             </div>


//             {/* OTP for users */}
//             <div className={`overflow-hidden transition-all duration-300 ease-in-out ${!isAdmin && showOtp ? "max-h-20" : "max-h-0"}`}>
//               <div className={`transition-opacity duration-300 ${!isAdmin && showOtp ? "opacity-100 delay-150" : "opacity-0"}`}>
//                 <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
//                   OTP
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="otp"
//                     type="text"
//                     value={otp}
//                     onChange={e => setOtp(e.target.value)}
//                     placeholder="Enter 6-digit OTP"
//                     maxLength={6}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm"
//                     disabled={isLoading}
//                   />
//                   <i className="fas fa-key absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                 </div>
//               </div>
//             </div>

//             {/* Error */}
//             {error && (
//               <div className="text-red-500 text-sm">
//                 <i className="fas fa-exclamation-circle mr-1" /> {error}
//               </div>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isLoading || isTransitioning}
//               className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition ${(isTransitioning || isLoading) ? "opacity-70" : ""}`}
//             >
//               {isLoading ? (
//                 <i className="fas fa-circle-notch fa-spin" />
//               ) : isAdmin ? (
//                 "Login"
//               ) : showOtp ? (
//                 "Verify OTP"
//               ) : (
//                 "Get OTP"
//               )}
//             </button>
//           </form>

//           {!isAdmin && (
//             <div className={`mt-6 text-center transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
//               <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
//                 Forgot password?
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;