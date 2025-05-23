import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/Dashboard";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <Routes>
    {/* Public login */}
    <Route path="/" element={<LoginPage />} />

    {/* Protected dashboard */}
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
