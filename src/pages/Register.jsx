import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <section className="bg-white max-w-5xl min-h-screen w-full flex m-auto justify-center items-center">
      <div className="bg-white rounded-sm shadow-2xl px-8 py-10  max-w-5xl w-[45%] justify-start ">
        <h1 className="text-3xl text-[#111] text-center font-medium text-balance mb-2 ">
          Create an account
        </h1>
        <p className="text-sm text-gray-500 text-center font-medium text-balance mb-4 tracking-tight leading-tight">
          Register now and have acces to CensusSys
        </p>
        <form onSubmit={handleLogin}>
            <div className="text-gray-500">
            <div className="shadow-2xl rounded-sm bg-white px-4 py-2 mb-3 w-full">
              <input
                type="text"
                placeholder="Name"
                className="text-[#111] text-sm border-none outline-none w-full"
                required
              />
            </div>
          </div>
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
          <div className="flex flex-col items-center mt-8 gap-1.5 mb-4">
            <button
              onClick={handleLogin}
              className="shadow-2xl rounded-sm font-medium text-sm bg-[#111] px-4 py-2.5 text-white w-full"
            >
              create account
            </button>
           
            <button className="border text-sm border-gray-300 px-4 py-2.5 rounded-sm w-full flex items-center justify-center gap-2">
              <span>Sign Up with Google</span>
            </button>
          </div>
          <div className="flex text-center gap-1 justify-center items-center text-sm">
            <p className="text-gray-500">Already have an account? </p>
            <Link to={"/login"} className="text-gray-900 font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { User, Mail, Lock, UserPlus } from "lucide-react";

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     if (formData.name && formData.email && formData.password) {
//       navigate("/dashboard");
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
//         <div className="text-center mb-8">
//           <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <span className="text-white text-2xl font-bold">C</span>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
//           <p className="text-gray-500 mt-2">Join CensusSys to manage your census data</p>
//         </div>
        
//         <form onSubmit={handleRegister}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   placeholder="John Doe"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   required
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
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
//                   value={formData.password}
//                   onChange={(e) => setFormData({...formData, password: e.target.value})}
//                   placeholder="Create a password"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   required
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
//                   placeholder="Confirm your password"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   required
//                 />
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
//             >
//               <UserPlus className="w-4 h-4" />
//               Create Account
//             </button>
//           </div>
//         </form>
        
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-500">
//             Already have an account?{" "}
//             <Link to="/login" className="text-black font-medium hover:underline">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }