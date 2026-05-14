import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <section className="bg-white max-w-5xl min-h-screen w-full flex m-auto justify-center items-center">
      <div className="bg-white rounded-sm shadow-2xl px-8 py-10  max-w-5xl ">
        <h1 className="text-3xl text-[#111] text-center font-medium text-balance mb-2 ">
          Welcome Back
        </h1>
        <p className="text-md text-gray-500 text-center text-balance mb-4 tracking-tight leading-tight">
          Enter your credentials to acces your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="text-gray-500">
            <label>Email</label>
            <div className="shadow-2xl rounded-sm bg-transparent border border-gray-300 p-2 mb-3 w-full">
              <input
                type="email"
                placeholder="Email"
                className="text-[#111]"
                required
              />
            </div>
          </div>
          <div className="text-gray-500">
            <label>Password</label>
            <div className="shadow-2xl rounded-sm bg-transparent border border-gray-300 p-2 mb-3 w-full">
              <input type="text" placeholder="Password" className="text-[#111]" required />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mb-4">
            <button
              onClick={handleLogin}
              className="shadow-2xl rounded-sm bg-[#111] p-2 text-white w-full"
            >
              Sign in
            </button>
            <div className="flex items-center justify-between w-full max-w-3xl gap-2">
              <p className="w-[30%] border border-gray-300" />
              <p className="text-sm text-gray-500">Or continue with</p>
              <p className="w-[30%] border border-gray-300" />
            </div>
            <button className="border border-gray-300 font-medium p-2 rounded-sm w-full">
              Google
            </button>
          </div>
          <div className="flex text-center gap-1 justify-center items-center text-sm">
            <p className="text-gray-500">Don't have an account? </p>
           <Link to={"/register"} className="text-purple-900 font-medium">Sign up</Link> 
          </div>
          
        </form>
      </div>
    </section>
  );
}
