import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center mt-24 px-6 text-center">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur"></div>
        <img
          src={assets.header_img}
          alt="Profile"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mt-8 text-gray-800">
        Hey{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {userData ? userData.name : "Developer"}
        </span>
        <img
          className="w-8 h-8 animate-bounce"
          src={assets.hand_wave}
          alt="Hand wave"
        />
      </h1>

      <h2 className="text-4xl sm:text-6xl font-bold mb-6 mt-4 bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-700 bg-clip-text text-transparent">
        Welcome to our app
      </h2>
      
      <p className="mb-10 max-w-lg text-lg text-gray-600 leading-relaxed">
        Let's start with a quick product tour and we will have you up and
        running in no time!
      </p>
      
      <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
        Get Started
      </button>
    </div>
  );
};

export default Header;