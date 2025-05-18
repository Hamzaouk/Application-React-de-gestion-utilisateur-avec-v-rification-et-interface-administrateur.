import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      
      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
          toast.success("Account created successfully!");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
          toast.success("Login successful!");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="absolute top-6 left-6 z-10">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-28 sm:w-32 cursor-pointer"
        />
      </div>
      
      <div className="w-full max-w-md z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              {state === "Sign Up" ? "Create Account" : "Welcome Back"}
            </h2>
            
            <p className="text-center text-gray-600 mt-2 mb-8">
              {state === "Sign Up"
                ? "Join us today and start your journey"
                : "Login to continue your journey"}
            </p>

            <form onSubmit={onSubmitHandler} className="space-y-6">
              {state === "Sign Up" && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src={assets.person_icon} alt="person" className="w-5 h-5" />
                  </div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </div>
              )}
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={assets.mail_icon} alt="email" className="w-5 h-5" />
                </div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={assets.lock_icon} alt="password" className="w-5 h-5" />
                </div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              {state === "Login" && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => navigate("/reset-password")}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                disabled={loading}
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Processing..." : state}
              </button>
            </form>

            <div className="mt-8 text-center">
              {state === "Sign Up" ? (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setState("Login")}
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Log in
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setState("Sign Up")}
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Sign up
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;