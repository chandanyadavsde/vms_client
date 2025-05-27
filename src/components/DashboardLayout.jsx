import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Header"

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-100">
        <Topbar />
        <main className="p-4 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
