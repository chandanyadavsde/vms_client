import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import truck from "../images/truck.svg"; // ✅ Correct way


export default function Login() {
  const [mode, setMode] = useState("user"); // 'user' or 'admin'
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const navigate = useNavigate();

  const switchMode = (newMode) => {
    setMode(newMode);
    setOtpRequested(false);
    setPassword("");
    setOtp("");
  };

  const handleGetOtp = () => {
    // TODO: call /request-otp
    setOtpRequested(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call /verify-otp or /login for admin
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2">
      <img
  src={truck}
  alt="truck"
  className="object-cover w-full h-full"
/>

      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          {/* Mode Switch */}
          <div className="flex mb-6">
            {["user", "admin"].map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`flex-1 py-2 transition-colors duration-300 ${
                  mode === m
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">
                {mode === "admin" ? "Email" : "Email"}
              </label>
              <input
                type="email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                className="w-full p-2 border rounded"
                placeholder={
                  mode === "admin" ? "Enter email" : "Enter email"
                }
              />
            </div>

            {mode === "admin" && (
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                  placeholder="Enter password"
                />
              </div>
            )}

            {mode === "user" && !otpRequested && (
              <button
                type="button"
                onClick={handleGetOtp}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              >
                Get OTP
              </button>
            )}

            {mode === "user" && otpRequested && (
              <div>
                <label className="block text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full p-2 border rounded animate-fadeIn"
                  placeholder="Enter OTP"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
            >
              {mode === "admin"
                ? "Login"
                : otpRequested
                ? "Verify"
                : "Get OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
