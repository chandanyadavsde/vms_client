import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Header"

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
