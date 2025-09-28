import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative px-3 py-2 shadow-lg sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-cyan-200">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-b-2xl border-b border-cyan-200 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="bg-gradient-to-tr from-pink-400 via-yellow-300 to-cyan-400 rounded-full p-1 shadow-md border-2 border-cyan-300">
              <img src="/profile2.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
            </div>
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-600 via-yellow-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent select-none drop-shadow px-2 py-1 rounded-lg border border-cyan-200" style={{letterSpacing:'0.04em'}}>Ashish Kumar</span>
        </div>
        <div className="hidden md:flex space-x-5 text-base font-semibold">
          <Link to="/" className="px-4 py-2 rounded hover:bg-cyan-50 transition">Home</Link>
          <Link to="/about" className="px-4 py-2 rounded hover:bg-yellow-50 transition">About</Link>
          <Link to="/support" className="px-4 py-2 rounded hover:bg-cyan-50 transition">Skills</Link>
          <Link to="/projects" className="px-4 py-2 rounded hover:bg-green-50 transition">Projects</Link>
          <Link to="/contact" className="px-4 py-2 rounded hover:bg-teal-50 transition">Contact</Link>
        </div>
        <button
          className="md:hidden flex items-center p-2 rounded-full bg-cyan-100/70 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full z-40">
          <div className="mx-2 rounded-2xl shadow-xl bg-white/95 border border-cyan-200 p-4 flex flex-col space-y-2 backdrop-blur-xl">
            <Link to="/" className="rounded-lg px-5 py-3 text-base font-bold text-cyan-700 bg-white hover:bg-cyan-50 transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="rounded-lg px-5 py-3 text-base font-bold text-yellow-700 bg-white hover:bg-yellow-50 transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/support" className="rounded-lg px-5 py-3 text-base font-bold text-cyan-700 bg-white hover:bg-cyan-50 transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/projects" className="rounded-lg px-5 py-3 text-base font-bold text-green-700 bg-white hover:bg-green-50 transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" className="rounded-lg px-5 py-3 text-base font-bold text-teal-700 bg-white hover:bg-teal-50 transition-all duration-200 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
