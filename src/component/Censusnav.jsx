import { Link } from "react-router-dom";

export default function Censusnav() {
  return (
    <nav className="sticky backdrop-blur-3xl top-0 z-50 items-center flex justify-between p-4 border-b border-gray-200 max-w-7xl mx-auto w-full">
      <div className="logo flex items-center justify-center p-2 gap-2">
        <p className="bg-[#111] px-3 py-1 text-white font-mono text-lg">C</p>
        <h1 className="text-[#111] font-sans text-xl font-semibold tracking-tight">CensusSys</h1>
      </div>
      <div className="flex font-sans items-center p-2 gap-8">
        <Link to={"/"} className="text-gray-700 hover:text-black transition font-medium">Features</Link>
        <Link to={"/dashboard"} className="text-gray-700 hover:text-black transition font-medium">Docs</Link>
        <Link to={"/profile"} className="text-gray-700 hover:text-black transition font-medium">Profile</Link>
      </div>
      <button className="px-4 py-2.5 outline-none gap-2 bg-[#111] text-sm cursor-pointer text-white font-mono font-medium hover:bg-gray-800 transition">
        Get Started
      </button>
    </nav>
  );
}