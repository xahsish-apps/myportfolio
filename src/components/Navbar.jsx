import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
	{
		to: "/",
		label: "Home",
		icon: (
			<svg
				className="w-5 h-5 mr-2 animate-bounce"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M3 12l9-9 9 9" />
				<path d="M9 21V9h6v12" />
			</svg>
		),
	},
	{
		to: "/about",
		label: "About",
		icon: (
			<svg
				className="w-5 h-5 mr-2 animate-pulse"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="7" r="4" />
				<path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
			</svg>
		),
	},
	{
		to: "/support",
		label: "Skills",
		icon: (
			<svg
				className="w-5 h-5 mr-2 animate-spin-slow"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 6v6l4 2" />
			</svg>
		),
	},
	{
		to: "/projects",
		label: "Projects",
		icon: (
			<svg
				className="w-5 h-5 mr-2 animate-bounce-x"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<rect x="3" y="13" width="7" height="8" />
				<rect x="14" y="3" width="7" height="18" />
			</svg>
		),
	},
	{
		to: "/contact",
		label: "Contact",
		icon: (
			<svg
				className="w-5 h-5 mr-2 animate-pulse"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h7" />
				<path d="M21 10.5l-9 5.5-9-5.5" />
			</svg>
		),
	},
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<nav className="relative px-3 py-2 shadow-lg sticky top-0 z-50 border-b border-cyan-200 animate-navbar-gradient bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-yellow-300">
			<div className="absolute inset-0 rounded-b-2xl border-b border-cyan-200 pointer-events-none animate-navbar-gradient bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-yellow-300 opacity-80"></div>
			<style>{`
				.animate-navbar-gradient {
					background-size: 200% 200%;
					animation: navbarGradientMove 5s linear infinite alternate;
				}
				@keyframes navbarGradientMove {
					0% { background-position: 0% 50%; }
					100% { background-position: 100% 50%; }
				}
			`}</style>
			<div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
				<div className="flex items-center space-x-3">
					<div className="relative">
						<div className="bg-pink-400 rounded-full p-1 shadow-md border-2 border-cyan-300">
							<img
								src="/profile4.jpg"
								alt="Logo"
								className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
							/>
						</div>
					</div>
					<span
						className="text-2xl font-extrabold tracking-tight text-black select-none drop-shadow px-2 py-1 rounded-lg border border-cyan-200 bg-pink-200"
						style={{ letterSpacing: "0.04em" }}
					>
						Neha Chaudhary
					</span>
				</div>
				<div className="hidden md:flex space-x-5 text-base font-semibold">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className="flex items-center px-4 py-2 rounded group transition relative overflow-hidden"
						>
							<span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 animate-btn-gradient"></span>
							<span className="relative z-10 flex items-center text-gray-900 group-hover:text-white group-focus:text-white">
								{link.icon}
								{link.label}
							</span>
						</Link>
					))}
				</div>
				<button
					className="md:hidden flex items-center p-2 rounded-full bg-cyan-100/70 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Open menu"
				>
					<svg
						width="28"
						height="28"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<rect
							x="4"
							y="7"
							width="16"
							height="2"
							rx="1"
							fill="currentColor"
						/>
						<rect
							x="4"
							y="15"
							width="16"
							height="2"
							rx="1"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
			{menuOpen && (
				<div className="md:hidden fixed top-16 left-0 w-full z-40">
					<div className="mx-2 rounded-2xl shadow-xl bg-white/95 border border-cyan-200 p-4 flex flex-col space-y-2 backdrop-blur-xl">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="flex items-center rounded-lg px-5 py-3 text-base font-bold text-cyan-700 bg-white relative overflow-hidden group hover:text-white focus:text-white transition-all duration-200 text-center"
								onClick={() => setMenuOpen(false)}
							>
								<span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 animate-btn-gradient"></span>
								<span className="relative z-10 flex items-center">
									{link.icon}
									{link.label}
								</span>
							</Link>
						))}
					</div>
				</div>
			)}
			<style>{`
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-bounce-x {
          animation: bounceX 1.2s infinite alternate;
        }
        @keyframes bounceX {
          0% { transform: translateX(0); }
          100% { transform: translateX(8px); }
        }
        .animate-btn-gradient {
          background-size: 200% 200%;
          animation: btnGradientMove 2.5s linear infinite alternate;
        }
        @keyframes btnGradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
		</nav>
	);
};

export default Navbar;
