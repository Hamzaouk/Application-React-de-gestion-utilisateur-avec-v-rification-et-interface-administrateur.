import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-300 opacity-10 blur-3xl"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 pt-16 pb-24">
          <Header />
        </main>
        
        {/* Footer */}
        <footer className="w-full text-center py-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Your App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;