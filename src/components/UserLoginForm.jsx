import React, { useState, useEffect } from 'react';

const UserLoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [email, otp]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getOtp = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setShowOtp(true);
      setIsLoading(false);
    }, 1000);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!/^[0-9]{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      onSuccess(email);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={showOtp ? verifyOtp : getOtp} className="space-y-4 transition-all duration-300">
      <div>
        <label htmlFor="user-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="user-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={showOtp || isLoading}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
        />
      </div>
      {showOtp && (
        <div className="animate-fadeIn">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
          <input
            id="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            disabled={isLoading}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
      )}
      {error && <div className="text-red-500 text-sm animate-fadeIn">{error}</div>}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition duration-200"
      >
        {isLoading ? 'Loading...' : showOtp ? 'Verify OTP' : 'Get OTP'}
      </button>
      <div className="mt-6 text-center">
        <a href="#" className="text-sm text-orange-500 hover:text-orange-600">Forgot password?</a>
      </div>
    </form>
  );
};

export default UserLoginForm;