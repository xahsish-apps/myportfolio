
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative px-4 py-3 shadow-2xl sticky top-0 z-50 animate-navbar-gradient border-b-4 border-indigo-400">
      {/* Glassmorphism & animated border */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-b-3xl border-b-4 border-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 animate-border-glow pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          {/* Logo image with animated ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-tr from-pink-400 via-yellow-300 to-cyan-400 animate-logo-glow"></div>
            <div className="bg-gradient-to-tr from-pink-400 via-yellow-300 to-cyan-400 rounded-full p-1 shadow-xl border-4 border-dashed border-cyan-400">
              <img src="/profile2.jpg" alt="Logo" className="w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg" />
            </div>
            {/* Unique frame: double border effect */}
            <div className="absolute inset-1 rounded-full border-2 border-white/60 pointer-events-none"></div>
          </div>
          <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-600 via-yellow-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent select-none drop-shadow-xl px-3 py-1 rounded-xl border-2 border-cyan-200 animate-gradient-move shadow-lg" style={{letterSpacing:'0.04em'}}>Ashish Kumar</span>
        </div>
        {/* Desktop Menu */}
  <div className="hidden md:flex space-x-7 text-lg font-semibold">
            <Link to="/" className="relative group transition">
              <span className="relative z-10 px-6 py-2 rounded-full font-bold transition-colors duration-300 group-hover:text-white">Home</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-yellow-400 to-cyan-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 animate-btn-gradient"></span>
            </Link>
            <Link to="/about" className="relative group transition">
              <span className="relative z-10 px-6 py-2 rounded-full font-bold transition-colors duration-300 group-hover:text-white">About</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 animate-btn-gradient"></span>
            </Link>
            <Link to="/support" className="relative group transition">
              <span className="relative z-10 px-6 py-2 rounded-full font-bold transition-colors duration-300 group-hover:text-white">Skills</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 animate-btn-gradient"></span>
            </Link>
            <Link to="/projects" className="relative group transition">
              <span className="relative z-10 px-6 py-2 rounded-full font-bold transition-colors duration-300 group-hover:text-white">Projects</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 animate-btn-gradient"></span>
            </Link>
            <Link to="/contact" className="relative group transition">
              <span className="relative z-10 px-6 py-2 rounded-full font-bold transition-colors duration-300 group-hover:text-white">Contact</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 animate-btn-gradient"></span>
            </Link>
        </div>
      <style>{`
          .animate-btn-gradient {
            background-size: 200% 200%;
            animation: btnGradientMove 2.5s linear infinite alternate;
          }
          @keyframes btnGradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .group:hover .group-hover:opacity-100 { opacity: 1 !important; }
          .group:hover .group-hover:scale-110 { transform: scale(1.10) !important; }
          .group:hover .group-hover:shadow-2xl { box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18) !important; }
          .group span.absolute { z-index: 1; transition: all 0.5s cubic-bezier(.4,0,.2,1); }
          .group span.relative { z-index: 10; }
          .animate-navbar-gradient {
            background: linear-gradient(90deg, #f472b6 0%, #facc15 25%, #2dd4bf 50%, #818cf8 100%);
            background-size: 300% 300%;
            animation: navbarGradientMove 8s ease-in-out infinite alternate;
          }
          @keyframes navbarGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          /* Removed .animate-spin-slow and spin keyframes */
          .animate-border-glow {
            box-shadow: 0 0 32px 0 #f472b6, 0 0 64px 0 #facc15, 0 0 32px 0 #2dd4bf;
            animation: borderGlow 6s ease-in-out infinite alternate;
          }
          @keyframes borderGlow {
            0% { box-shadow: 0 0 32px 0 #f472b6, 0 0 64px 0 #facc15, 0 0 32px 0 #2dd4bf; }
            100% { box-shadow: 0 0 48px 0 #818cf8, 0 0 80px 0 #f472b6, 0 0 48px 0 #facc15; }
          }
          .animate-logo-glow {
            box-shadow: 0 0 0 0 #f472b6, 0 0 0 0 #facc15, 0 0 0 0 #2dd4bf;
            animation: logoGlow 5s ease-in-out infinite alternate;
          }
          @keyframes logoGlow {
            0% { box-shadow: 0 0 0 0 #f472b6, 0 0 0 0 #facc15, 0 0 0 0 #2dd4bf; }
            100% { box-shadow: 0 0 24px 8px #f472b6, 0 0 32px 12px #facc15, 0 0 24px 8px #2dd4bf; }
          }
        `}</style>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {/* Three-dot (kebab) icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="5" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="19" cy="12" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full z-40 animate-fade-in-down">
          <div className="mx-2 rounded-3xl shadow-2xl bg-gradient-to-br from-pink-200 via-yellow-100 via-orange-100 to-teal-100 bg-opacity-95 border-2 border-cyan-300/40 p-6 flex flex-col space-y-4 backdrop-blur-2xl">
            <Link to="/" className="rounded-full px-6 py-3 text-xl font-bold text-pink-600 bg-white/80 shadow-md hover:bg-pink-100 transition-all duration-300 text-center" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="rounded-full px-6 py-3 text-xl font-bold text-yellow-600 bg-white/80 shadow-md hover:bg-yellow-100 transition-all duration-300 text-center" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/support" className="rounded-full px-6 py-3 text-xl font-bold text-cyan-600 bg-white/80 shadow-md hover:bg-cyan-100 transition-all duration-300 text-center" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/projects" className="rounded-full px-6 py-3 text-xl font-bold text-green-600 bg-white/80 shadow-md hover:bg-green-100 transition-all duration-300 text-center" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" className="rounded-full px-6 py-3 text-xl font-bold text-teal-600 bg-white/80 shadow-md hover:bg-teal-100 transition-all duration-300 text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
      <style>{`
        .animate-navbar-gradient {
          background-size: 300% 300%;
          animation: navbarGradientMove 8s ease-in-out infinite alternate;
        }
        @keyframes navbarGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
