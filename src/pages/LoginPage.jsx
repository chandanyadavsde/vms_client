import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ToggleSwitch from "../components/ToggleSwitch";
import UserLoginForm from "../components/UserLoginForm";
import AdminLoginForm from "../components/AdminLoginForm";
import truck from "../images/truck.svg"
import warehouse from "../images/warehouse.jpg"

const LoginPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setShowOtp(false);
    setEmail("");
    setPassword("");
    setOtp("");
    setError("");
  };

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
    resetForm();
  };

  const finishLogin = name => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userName", name);
    navigate("/dashboard");
  };

  const handleGetOtp = async e => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return setError("Please enter a valid email address");
    }
    setIsLoading(true);
    try {
      const response = await fetch("https://5e60-27-107-57-214.ngrok-free.app/vms/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ identifier: email })
      });
      const result = await response.json();
      if (!result.success) {
        setError(result.message);
      } else {
        setShowOtp(true);
        setError("");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserLogin = async e => {
    e.preventDefault();
    if (!otp.match(/^\d{6}$/)) {
      return setError("Please enter a valid 6-digit OTP");
    }
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/vms/otpverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ identifier: email, otp })
      });
      const result = await response.json();
      if (!result.success) {
        setError(result.message);
      } else {
        localStorage.setItem("token", result.token);
        finishLogin(result.user.name);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminLogin = e => {
    e.preventDefault();
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }
    setIsLoading(true);
    setTimeout(() => {
      finishLogin("Admin");
    }, 1000);
  };

  useEffect(() => {
    setError("");
  }, [isAdmin, email, password, otp]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-2">
      <div className="hidden md:block md:w-1/2 relative overflow-hidden rounded-xl">
        <img
          src={truck}
          alt="Logistics Truck"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
            !isAdmin ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <img
          src={warehouse}
          alt="Warehouse"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
            isAdmin ? "translate-x-0" : "-translate-x-full"
          }`}
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500">Skeiron Logistics</h1>
            <p className="text-gray-500 mt-2">Smart logistics solutions for your business</p>
          </div>

          <ToggleSwitch isAdmin={isAdmin} onToggle={handleToggle} />

          <div className="form-content transition-all duration-300">
            {isAdmin ? (
              <AdminLoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isLoading={isLoading}
                error={error}
                onLogin={handleAdminLogin}
              />
            ) : (
              <UserLoginForm
                email={email}
                setEmail={setEmail}
                otp={otp}
                setOtp={setOtp}
                showOtp={showOtp}
                isLoading={isLoading}
                error={error}
                onGetOtp={handleGetOtp}
                onVerifyOtp={handleUserLogin}
              />
            )}
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
