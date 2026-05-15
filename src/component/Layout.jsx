import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Optional Navbar */}
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <h1 className="font-semibold">Census Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <div className="p-6 flex-1">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;