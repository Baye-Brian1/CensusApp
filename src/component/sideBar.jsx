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

export default function Sidebar(){
    const navItems=[
        {path:"/dashboard", icon:LayoutDashboard, label:"Dashboard"},
        {path:"/households", icon:Users, label:"Households"},
        { path: "/individuals", icon: User, label: "Individuals" },
    { path: "/enumerators", icon: UserCheck, label: "Enumerators" },
    { path: "/reports", icon: FileText, label: "Reports" },
    { path: "/analytics", icon: BarChart3, label: "Analytics" },
    { path: "/settings", icon: Settings, label: "Settings" },
    ]

    return(
        <div className="h-full border-r border-gray-200 bg-white flex flex-col">
          <div className="border-b p-6 border-gray-200">
            <NavLink to="/" className=" flex items-center gap-2">
            <p className="bg-[#111] px-3 py-1 text-white font-mono text-lg">C</p>
            <h1 className="text-[#111] font-sans text-xl font-semibold tracking-tight">CensusSys</h1>
            </NavLink>
          </div>
          <nav className="flex-1 p-4">
            <div className="space-y-1">
                {navItems.map((item)=>(
                   <NavLink
                   key={item.path}
                   to={item.path}
                   className={({isActive})=>
                    `${isActive?
                    "bg-gray-100 text-gray-900":
                    "text-gray-600 hover:bg-gray-50 hover:text-gray-900"

                    } flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors `
                   }>
                    <item.icon className="w-4 h-4"/>
                    {item.label}

                   </NavLink>
                ))}
                </div>  
          </nav>
          <div className="p-4 border-t  border-gray-200 ">
                    <NavLink to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        <Home className="w-4 h-4"/>
                        Back to Home
                    </NavLink>
                </div>
            </div>
    );
}