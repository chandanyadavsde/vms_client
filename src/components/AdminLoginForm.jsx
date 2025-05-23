import React from "react";

const AdminLoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  error,
  onLogin,
}) => {
  return (
    <form onSubmit={onLogin} className="space-y-4">
      <div>
        <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-sm"
            disabled={isLoading}
          />
          <i className="fas fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 text-sm"
            disabled={isLoading}
          />
          <i className="fas fa-lock absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm animate-fadeIn">
          <i className="fas fa-exclamation-circle mr-1"></i> {error}
        </div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] !rounded-button whitespace-nowrap cursor-pointer"
      >
        {isLoading ? <i className="fas fa-circle-notch fa-spin mr-2"></i> : "Login"}
      </button>
    </form>
  );
};

export default AdminLoginForm;
