import React, { useState, useEffect } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import UserLoginForm from "./components/UserLoginForm";
import AdminLoginForm from "./components/AdminLoginForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
    setShowOtp(false);
    setEmail("");
    setPassword("");
    setOtp("");
    setError("");

    const formContent = document.querySelector(".form-content");
    if (formContent) {
      formContent.classList.add("opacity-0");
      setTimeout(() => {
        formContent.classList.remove("opacity-0");
      }, 300);
    }
  };

  const handleGetOtp = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setShowOtp(true);
      setIsLoading(false);
      setError("");
    }, 1000);
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!otp || otp.length !== 6 || !/^\d+$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setUserName(email.split("@")[0]);
      setIsLoading(false);
    }, 1000);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setUserName("Admin");
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setOtp("");
    setShowOtp(false);
    setError("");
  };

  useEffect(() => {
    setError("");
  }, [isAdmin, email, password, otp]);

  if (isLoggedIn) {
    return <Dashboard userName={userName} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-1">
      {/* Left side - Background Image */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden rounded-xl">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20logistics%20truck%20on%20highway%20with%20sunset%20background%2C%20professional%20freight%20transportation%20vehicle%2C%20clean%20minimalist%20composition%20with%20soft%20lighting%20and%20warm%20tones%2C%20corporate%20logistics%20branding%20imagery%20with%20space%20for%20text%20on%20left%20side&width=800&height=1024&seq=truck1&orientation=portrait"
          alt="Logistics Truck"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ${
            !isAdmin ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20warehouse%20interior%20with%20advanced%20robotics%20and%20automation%20systems%2C%20high%20tech%20logistics%20facility%20with%20organized%20shelving%20and%20machinery%2C%20professional%20industrial%20environment%20with%20cool%20lighting%20and%20minimalist%20design&width=800&height=1024&seq=warehouse1&orientation=portrait"
          alt="Warehouse Interior"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ${
            isAdmin ? "translate-x-0" : "-translate-x-full"
          }`}
        />
      </div>
      {/* Right side - Auth Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500">Skeiron Logistics</h1>
            <p className="text-gray-500 mt-2">Smart logistics solutions for your business</p>
          </div>
          {/* Toggle Switch */}
          <ToggleSwitch isAdmin={isAdmin} onToggle={handleToggle} />
          {/* Dynamic Form Content */}
          <div className="transition-all duration-300 form-content">
            {!isAdmin ? (
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
            ) : (
              <AdminLoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isLoading={isLoading}
                error={error}
                onLogin={handleAdminLogin}
              />
            )}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-sm text-orange-500 hover:text-orange-600 transition duration-200 cursor-pointer"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
