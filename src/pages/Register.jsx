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
