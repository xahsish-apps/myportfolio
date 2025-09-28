
import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my work and skills.",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "A modern e-commerce application with shopping cart and payment integration.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support.",
    link: "#",
  },
];


const Projects = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("animate-fade-in-up");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
  <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-orange-100 via-yellow-200 via-pink-100 to-orange-200 text-orange-900 opacity-0" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative group rounded-3xl p-1 bg-gradient-to-tr from-teal-400/60 via-cyan-400/40 to-gray-900/80 shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute -top-8 right-6 w-16 h-16 bg-cyan-400 opacity-30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 z-0"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-2xl p-8 min-h-[260px] flex flex-col items-center text-center border border-white/10 text-gray-900">
                <div className="mb-4 animate-float">
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#14b8a6" opacity="0.18" />
                    <path d="M8 16L12 8L16 16" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{project.title}</h3>
                <p className="mb-4 flex-1 text-gray-800 group-hover:text-black transition-colors duration-300">{project.description}</p>
                <a href={project.link} className="inline-block mt-auto px-6 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 hover:bg-cyan-500 transition-transform duration-300">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in-up {
          opacity: 1 !important;
          animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
