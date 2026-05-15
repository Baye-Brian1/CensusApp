import { NavLink } from "react-router-dom";
import { Home, BarChart, Users, User, UserCheck, Settings, Clipboard } from "lucide-react";

export const sideBar=()=>{
    return(
        <aside className="bg-white w-64 border-r border-gray-200 min-h-screen">
            <div className="text-[#111] font-sans text-xl font-semibold tracking-tight">
                CensusSys
            </div>
            <nav className="flex flex-col">
                <NavLink to="/" className="flex items-center gap-2 hover:bg-gray-100"><Home/>Dashboard</NavLink>
                <NavLink to="/household" className="flex items-center gap-2 hover:bg-gray-100"><Users/>Households</NavLink>
                <NavLink to="/individuals" className="flex items-center gap-2 hover:bg-gray-100"><User/>Individuals</NavLink>
                <NavLink to="/enumerators" className="flex items-center gap-2 hover:bg-gray-100"><UserCheck/>Enumerators</NavLink>
                <NavLink to="/reports" className="flex items-center gap-2 hover:bg-gray-100"><Clipboard/>Reports</NavLink>
                <NavLink to="/analytics" className="flex items-center gap-2 hover:bg-gray-100"><BarChart/>Analytics</NavLink>
                <NavLink to="/settings" className="flex items-center gap-2 hover:bg-gray-100"><Settings/>Settings</NavLink>
            </nav>
        </aside>
    )
}