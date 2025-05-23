import React from "react";

const UserLoginForm = ({
  email,
  setEmail,
  otp,
  setOtp,
  showOtp,
  isLoading,
  error,
  onGetOtp,
  onVerifyOtp,
}) => (
  <form onSubmit={showOtp ? onVerifyOtp : onGetOtp} className="space-y-4">
    <div>
      <label htmlFor="user-email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <div className="relative">
        <input
          id="user-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm"
          disabled={showOtp || isLoading}
        />
        <i className="fas fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
      </div>
    </div>

    {showOtp && (
      <div className="animate-fadeIn">
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
          OTP
        </label>
        <div className="relative">
          <input
            id="otp"
            type="text"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-sm"
            disabled={isLoading}
          />
          <i className="fas fa-key absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>
      </div>
    )}

    {error && (
      <div className="text-red-500 text-sm">
        <i className="fas fa-exclamation-circle mr-1" /> {error}
      </div>
    )}

    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
    >
      {isLoading
        ? <i className="fas fa-circle-notch fa-spin" />
        : showOtp
        ? "Verify OTP"
        : "Get OTP"}
    </button>
  </form>
);

export default UserLoginForm;
