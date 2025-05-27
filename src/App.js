import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./components/DashboardLayout";
import UserManagementPage from "./components/UserManagementPage";
import AddUserPage from "./pages/AddUserPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* Public login */}
      <Route path="/" element={<LoginPage />} />

      {/* Protected dashboard + nested pages */}
      <Route
        path="/admindashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* this is rendered into <Outlet /> of DashboardLayout */}
        <Route index element={<Dashboard/>}/>
        <Route path="usermanagement" element={<UserManagementPage />} />
        <Route path="add-user" element={<AddUserPage />} />
        {/* you can add more child routes here */}
      </Route>

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}