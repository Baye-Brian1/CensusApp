import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <section className="bg-white max-w-5xl min-h-screen w-full flex m-auto justify-center items-center">
      <div className="bg-white rounded-sm shadow-2xl px-8 py-10  max-w-5xl w-[40%]">
        <h1 className="text-3xl text-[#111] text-center font-medium text-balance mb-2 ">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center font-medium text-balance mb-4 tracking-tight leading-tight">
          Enter your credentials to acces your account
        </p>
        <form onSubmit={handleLogin}>
           <div className="text-gray-500">
            <div className="shadow-2xl rounded-sm bg-white px-4 py-2 mb-3 w-full">
              <input
                type="email"
                placeholder="Email"
                className="text-[#111] text-sm border-none outline-none w-full"
                required
              />
            </div>
          </div>
          <div className="text-gray-500">
            <div className="shadow-2xl rounded-sm bg-white px-4 py-2 mb-3 w-full">
              <input
                type="text"
                placeholder="Password"
                className="text-[#111] text-sm border-none outline-none w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mb-4">
            <button
              onClick={handleLogin}
              className="shadow-2xl rounded-sm bg-[#111] p-2 text-sm font-medium text-white w-full"
            >
              Sign in
            </button>
            <div className="flex items-center justify-between w-full max-w-3xl gap-2">
              <p className="w-[30%] border border-gray-300" />
              <p className="text-sm text-gray-500">Or continue with</p>
              <p className="w-[30%] border border-gray-300" />
            </div>
            <button className="border border-gray-300 font-medium p-2 rounded-sm w-full flex items-center justify-center gap-2">
              <svg width="20" viewBox="0 0 24 24"></svg>
              <span>Google</span>
            </button>
          </div>
          <div className="flex text-center gap-1 justify-center items-center text-sm">
            <p className="text-gray-500">Don't have an account? </p>
           <Link to={"/register"} className="text-gray-900 font-medium">Sign up</Link> 
          </div>
          
        </form>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Mail, Lock, LogIn } from "lucide-react";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email && password) {
//       navigate("/dashboard");
//     } else {
//       alert("Please enter email and password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
//         <div className="text-center mb-8">
//           <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <span className="text-white text-2xl font-bold">C</span>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
//           <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
//         </div>
        
//         <form onSubmit={handleLogin}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="john@example.com"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   required
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   required
//                 />
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
//             >
//               <LogIn className="w-4 h-4" />
//               Sign In
//             </button>
//           </div>
//         </form>
        
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-500">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-black font-medium hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }