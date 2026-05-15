import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  User, 
  UserCheck, 
  FileText, 
  BarChart3, 
  Settings,
  Home
} from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/households", icon: Users, label: "Households" },
    { path: "/individuals", icon: User, label: "Individuals" },
    { path: "/enumerators", icon: UserCheck, label: "Enumerators" },
    { path: "/reports", icon: FileText, label: "Reports" },
    { path: "/analytics", icon: BarChart3, label: "Analytics" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="bg-white w-64 border-r border-gray-200 flex flex-col fixed h-full">
      <div className="p-6 border-b border-gray-200">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-black w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">CensusSys</h1>
        </NavLink>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </NavLink>
      </div>
    </aside>
  );
}