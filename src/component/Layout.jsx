import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Bell, User } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>
        <div className="flex-1 flex  flex-col min-w-0">
         <div className="bg-white border-b border-gray-200 px-6 py-4">
           <div className="flex justify-between  items-center">
            <h1 className="font-semibold text-gray-800">Census Dashboard</h1>
            <div className="flex gap-4 items center">
              <button className="p-2 rounded-full relative hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute bg-red-500 top-1 right-1 w-2 h-2 rounded full" />
              </button>
              <button className="flex items-center gap-2 p-2 hover:bg-gray:100 rounded-lg">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
          
        </div>
        <div className="flex-1 overflow-auto p-6">
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default Layout;
